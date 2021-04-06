import zTemplate from '../src/matrix-template'

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
