// 1.鸭子类型：“如果它走起路来像鸭子，叫起来也是鸭子，那么它就是鸭子。”
// const dusk = {
//   duckSing: function () {
//     console.log('嘎嘎嘎');
//   }
// };
// const chicken = {
//   duckSing: function () {
//     console.log('嘎嘎嘎');
//   }
// };
// let choir = [];
// const joinChoir = animal => {
//   if (animal && typeof animal.duckSing === 'function') {
//     choir.push(animal);
//     console.log('恭喜加入合唱团');
//     console.log('合唱团当前成员数量为:' + choir.length);
//   }
// };
// joinChoir(dusk);
// joinChoir(chicken);

//2.多态：同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果
//2.1 一段伪多态代码
// const makeSound = animal => {
//   if (animal instanceof Duck) {
//     console.log('嘎嘎嘎');
//   } else if (animal instanceof Cat) {
//     console.log('喵喵喵');
//   }
// };
// const Duck = function () {};
// const Cat = function () {};
// makeSound(new Duck());
// makeSound(new Cat());
//增加不同的动物时，必须对makeSound函数进行修改，makeSound函数会越来越臃肿
//2.2 一段多态代码
// const makeSound = animal => {
//   animal.sound();
// };
// const Duck = function () {};
// const Cat = function () {};
// Duck.prototype.sound = () => {
//   console.log('嘎嘎嘎');
// };
// Cat.prototype.sound = () => {
//   console.log('喵喵喵');
// };
// makeSound(new Duck());
// makeSound(new Cat());
//2.3proto与prototype，JavaScript的原型链
// function Duck() {}
// let duck = new Duck();
// console.log(duck.__proto__ === Duck.prototype);
// let duckPrototype = Duck.prototype;
// while (duckPrototype !== null) {
//   console.log(duckPrototype);
//   duckPrototype = duckPrototype.__proto__;
// }
