# matrix-template

A powerful JavaScript template engine

## Quick Start

```
npm i matrix-template

```

```
const matrixTemplate =  require('matrix-template');

console.log(matrixTemplate.process('hello ${this.name}', { name: 'zhangchi' }))
//hello zhangchi
```