//console.log("Hello World");
const squareNumber =  function(number){
const result = number * number;
console.log(`The result of squaring the number ${number} is ${result}`);
return result;
}
squareNumber(4);

const halfNumber = function (number) {
  const result = number / 2;
  console.log(`Half of ${number} id ${result}`);
  return result;
}
halfNumber(5);

const percentOf = function(num1, num2){
  const result = num1 / num2 * 100;
  console.log(`${num1} is ${num2} % of ${result}`);
  return result;
}
percentOf(2, 50);

const OfCircle = function(radius){
  const area = Math.PI * radius * radius;
  console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`);
}
OfCircle(2);

const newCalulate = function(number){
  const half = halfNumber(number);
  const squre = squareNumber(half);
  const circle = OfCircle(squre);
  const procent = percentOf(circle, squre)

}

newCalulate(10);
