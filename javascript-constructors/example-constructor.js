function ExampleConstructor() {
}

console.log('value of ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor prototype:', typeof ExampleConstructor.prototype);

var new1 = new ExampleConstructor();
console.log('value of new1:', new1);

var instanceOf1 = new1 instanceof ExampleConstructor;
console.log('value of instanceOf1:', instanceOf1);
