import { Test, TestingModule } from '@nestjs/testing'
import { ConsoleModule } from 'nestjs-console'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      imports: [ConsoleModule],
      providers: [AppService],
      exports: [AppService]
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('basicFillPackage', () => {
    it('should return unoptimized box list', () => {
      expect(appController.basicFillPackages('163841689525773')).toBe(
        '163/8/41/6/8/9/52/5/7/73'
      )
    })

    it('should fail when input has letters', () => {
      expect(appController.basicFillPackages('1234a56789')).toBe(undefined)
    })
  })

  describe('optimizedFillPackages', () => {
    it('should return optimized box list', () => {
      expect(appController.optimizedFillPackages('163841689525773')).toBe(
        '91/82/81/73/73/64/6/55'
      )
    })

    it('should fail when input has letters', () => {
      expect(appController.optimizedFillPackages('1234a56789')).toBe(undefined)
    })
  })
})
