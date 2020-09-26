import { isDigitString } from './app.utils'
describe('AppController', () => {
  describe('isDigitString', () => {
    it('should return false with letters', () => {
      expect(isDigitString('1234a56789')).toBe(false)
    })
    it('should return true with digits only', () => {
      expect(isDigitString('123456789')).toBe(true)
    })
  })
})
