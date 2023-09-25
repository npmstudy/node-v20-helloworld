// 定义一个异步函数
export async function sayHi(name) {
  // 调用Promise函数
  const text = await helloworld(name);
  console.log(text);
}

// 调用Promise函数
function helloworld(name) {
  return new Promise(function (resolve, reject) {
    if (name) {
      resolve(`Hello ${name}!`);
    } else {
      reject(new Error("fail"));
    }
  });
}
