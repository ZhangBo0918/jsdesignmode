/**
 * date:2022/8/17 22:05
 * 单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
 * */
const Singleton = function (name) {
  this.name = name;
  this.instance = null;
};

Singleton.prototype.getName = function () {
  console.log(this.name);
};

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};

const a = Singleton.getInstance('aaa');
console.log(Singleton);
const b = Singleton.getInstance('bbb');
console.log(Singleton);
console.log(a === b);
