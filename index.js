// 定义一个异步函数
export async function sayHi(name) {
  try {
    // 调用Promise函数
    const text = await helloworld(name);
    console.log(text);
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
