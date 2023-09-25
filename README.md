# nodejs-v20-helloworld

![build status](https://github.com/npmstudy/node-v20-helloworld/actions/workflows/main.yml/badge.svg) [![codecov](https://codecov.io/github/npmstudy/node-v20-helloworld/graph/badge.svg?token=CSMN20E3W4)](https://codecov.io/github/npmstudy/node-v20-helloworld)

- use Node.js v20 test runner
- use c8 for coverage

## Cli

```
$ npm i -g node-v20-helloworld
$ node-v20-helloworld liangqi
'Hello liangqi!'
```

## Module

```
$ npm i --save node-v20-helloworld
```

usage

```
#! /usr/bin/env node
import { sayHi } from 'node-v20-helloworld';

async function main(){
	// 调用异步函数
	const person = process.argv[2];

	await sayHi(person);
}

main();

```

## Test

```
// test
$ npm test

// watch some dir
$ npm run test:watch

// npm test -- --experimental-test-coverage
$ npm run test:coverage
```

## License

MIT @ npmstudy