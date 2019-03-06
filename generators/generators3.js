const customGenerator = function* (a, b) {
    //Вы можете использовтаь несколько операторов yield
    const k = yield a + b;
    const l = yield k * 2 + (b + a - 10);

    yield a + b + k + l
    //У нас может быть ещё код после оператора yield (в отличии от оператора return).
    console.log('you can do more stuff here :)')
}

const generator = customGenerator(a = 20, b = 50);

let k = generator.next().value;
console.log(k, ' - k');

//Отправка значений в оба направления через метод next()
let l = generator.next(k).value;
console.log(l, ' - l')
console.log(generator.next(l).value)

console.log(generator.next())


// Разница между генераторами и async/await заключается в:
// async/await используют await вместо yield.
// await работают исключительно с Promise.
// Вместо ключевого слова function* они используют async function
// На самом деле async/await это просто подмножество генераторов, которые представляют определённый синтаксический сахар.
