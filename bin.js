#! /usr/bin/env node
import { sayHi } from "./index";

// 调用异步函数
const person = process.argv[2];

sayHi(person);
