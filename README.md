# nodejs-v20-helloworld

## cli

```
$ npm i -g node-v20-helloworld
$ node-v20-helloworld liangqi
'Hello liangqi!'
```

## module

```
$ npm i --save node-v20-helloworld
```

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

## test

```
$ npm test
```
