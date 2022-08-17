/*
 *第三章 闭包与高阶函数
 **/
//一段简单的闭包程序
const func = () => {
  let a = 1;
  return () => {
    a++;
    console.log(a);
  };
};
const fn = func();
console.log(fn);
for (let i = 0; i < 10; i++) {
  fn();
}
//输出结果：2,3,4,5,6,7,8,9,10,11
//分析：执行f=func()时，f返回了一个匿名函数的引用，它可以访问到func()被调用时产生的环境，而局部变量a一直处在这个环境里

//高阶函数
//节流函数
// const throttle = (fn, interval) => {
//   const __self = fn;
//   let timer;
//   //  b不想写了，摆烂:)
// };
