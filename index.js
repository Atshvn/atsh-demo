var Dog = require('./Dog');
var cat = require('./cat');
var dog = new Dog('tom');
var meo = new cat();
dog.sayHi(); 
dog.eat(meo);
console.log(dog);