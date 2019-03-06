// https://medium.com/@sergeybulavyk/%D0%B2%D1%81%D1%91-%D1%8D%D1%82%D0%BE-%D0%BB%D0%B5%D0%B3%D0%BA%D0%BE-%D0%BE%D0%B1%D1%8A%D1%8F%D1%81%D0%BD%D0%B8%D1%82%D1%8C-symbols-iterators-generators-async-await-%D0%B0-%D1%82%D0%B0%D0%BA-%D0%B6%D0%B5-async-iterators-8c8b952e5dcf
// Генератор (Generator) - это функция со специальной возможностью, она умеют приостанавливать своё выполнение,
// возвращать результат и возобновлять выполнение, в произвольный момент времени.

// Когда и как приостанавливать свое выполнение решает сама функция-генератор, а не внешний код, он только использует отдаваемые ей значения.
// Возобновить исполнение приостановленной функции-генератора можно только из внешнего кода.
// Используя ключевое слово yield, можно как получать, так и передавать данные функции-генератору.
// ⚠️ Стрелочные функции не могут быть генераторами.

// Генераторы имеют новый синтаксис - используется конструкция function*.


//Так как функция-генератор возвращает объект-генератор, с уже готовым итератором, можно использовать цикл for...of.

// Объявление функции
// function* myGenerator() {}

// Функциональное выражение
// const myGenerator = function*() {};

// Метод объекта
// const obj = {
//  * myGenerator() { },
// };

// Метод класса
// class MyClass() {
//  * myGenerator() { }
// }

const myGenerator = function* () {
    yield 1;
    yield 2;
}

const generator = myGenerator();

//console.log(generator.next());
//console.log(generator.next());

for (const value of generator) {
    console.log(value, ' - value')
}

const myGenerator2 = function* (max) {
    for (let i = 0; i < max; i += 1) {
        yield i;
    }
};

const generator2 = myGenerator2(5);
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
