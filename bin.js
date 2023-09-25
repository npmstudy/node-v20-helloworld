#! /usr/bin/env node
import { sayHi } from "./index.js";

// 调用异步函数
const person = process.argv[2];

sayHi(person);
