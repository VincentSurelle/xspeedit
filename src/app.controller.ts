import { Controller } from '@nestjs/common'
import { ConsoleService } from 'nestjs-console'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly consoleService: ConsoleService, private readonly appService: AppService) {}
}
