# matrix-template

A powerful JavaScript template engine

## Quick Start

install `matrix-template`

```
npm i matrix-template

```

use it in nodejs

```
const matrixTemplate =  require('matrix-template');

console.log(matrixTemplate.process('hello ${this.name}', { name: 'zhangchi' })); //hello zhangchi

```

# License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2013-present, zhangchi