// 定义一个异步函数
async function sayHi(name) {
  try {
    // 调用Promise函数
    const text = await helloworld(name);
    console.dir(text);
  } catch (error) {
    console.log(error);
  }
}

// 调用Promise函数
function helloworld(name) {
  return new Promise(function (resolve, reject) {
    resolve(`Hello ${name}!`);
  });
}

// 调用异步函数
const person = process.argv[2];

sayHi(person);
