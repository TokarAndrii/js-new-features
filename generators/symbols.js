//Symbols

//const mySymbol = new Symbol(); - error Symbol is not a constructor
// (descriptions, описания), преимущественно для логирования
const symbol = Symbol('symbol descriptor text');

const user = { name: "Mango" };
user[symbol] = "very hapy!";

console.log(user, ' - user')
console.log(symbol, ' - symbol')
console.log(user[symbol], ' - user[symbol]')
