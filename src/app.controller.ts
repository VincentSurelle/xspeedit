import { Controller, Logger } from '@nestjs/common'
import { ConsoleService } from 'nestjs-console'
import { AppService } from './app.service'
import { isDigitString } from './app.utils'

@Controller()
export class AppController {
  constructor(
    private readonly consoleService: ConsoleService,
    private readonly appService: AppService
  ) {
    this.consoleService.createCommand(
      {
        command: 'basic-package <input>',
        description: 'Fill boxes by taking items one by one'
      },
      this.basicFillPackages,
      this.consoleService.getCli()
    )
    this.consoleService.createCommand(
      {
        command: 'optimized-package <input>',
        description: 'Filling using as few boxes as possible'
      },
      this.optimizedFillPackages,
      this.consoleService.getCli()
    )
  }

  basicFillPackages = (input: string): string => {
    if (!isDigitString(input)) {
      Logger.error(`The input mus only contains digits`)
      return
    }

    const [...items] = input
    const boxes = this.appService.basicPackage(items)
    console.log(boxes)
    return boxes
  }

  optimizedFillPackages = (input: string): string => {
    if (!isDigitString(input)) {
      Logger.error(`The input mus only contains digits`)
      return
    }

    const [...items] = input
    const boxes = this.appService.optimizedPackage(items)
    console.log(boxes)
    return boxes
  }
}
