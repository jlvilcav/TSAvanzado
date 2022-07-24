const prices: (number|string)[] = [1,2,2,3,3,4,5,'asd'];

prices.push(1);
prices.push('asd2');

//tupla -> establece la cantidad de elementos como sus tipos de un array

let user:[string, number];
user = ['jorgebytes',15];
// user = [12,'jorgebytes'];

const [username, age] = user;

console.log(username);
console.log(age);


