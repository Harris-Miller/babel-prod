
class Base {
  constructor(...param) {
    this.param = param[0];
  }

  speak() {
    console.log(`this.param: ${this.param}`);
  }
}

class Test extends Base {
  constructor(param) {
    super(param + ' :: from child class.');
  }

  speak() {
    console.log('Test::speak');
    super.speak();
  }
}

const arr = [1, 2, 3];
var [a, b] = arr;

const obj = { first: 'John', last: 'Doe'};
var { first, last} = obj;

console.log(a, b);
console.log(first, last);

export default Test
