import zTemplate from '../src/k-template'

/**
 * Dummy test
 */
describe('zTemplate test', () => {
    it('zTemplate process', () => {
        expect(
            zTemplate.process('hello ${this.name}', { name: 'zhangchi' })
        ).toEqual('hello zhangchi')
    })
})
