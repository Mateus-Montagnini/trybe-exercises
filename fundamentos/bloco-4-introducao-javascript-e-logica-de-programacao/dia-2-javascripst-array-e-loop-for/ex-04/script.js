let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);

if (average > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor que 20');
} 