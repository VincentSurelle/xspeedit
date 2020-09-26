import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from './app.service'

describe('AppService', () => {
  let service: AppService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService]
    }).compile()

    service = module.get<AppService>(AppService)
  })

  describe('basicPackage', () => {
    it('should return unoptimized box list', () => {
      expect(
        service.basicPackage([
          '1',
          '6',
          '3',
          '8',
          '4',
          '1',
          '6',
          '8',
          '9',
          '5',
          '2',
          '5',
          '7',
          '7',
          '3'
        ])
      ).toBe('163/8/41/6/8/9/52/5/7/73')
    })
  })
})
