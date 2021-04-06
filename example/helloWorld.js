import matrixTemplate from 'matrix-template'

matrixTemplate.process('hello ${this.name}', { name: 'zhangchi' }) //hello zhangchi