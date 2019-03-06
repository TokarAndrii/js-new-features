// Такое выражение, result = yield value в генераторе делает следующее:
// При вызове next(), возвращает value во внешний код, приостанавливая выполнение генератора.
// Внешний код может обработать значение, и затем вызвать next(arg) с аргументом.
// Генератор продолжит выполнение, аргумент next(arg) будет возвращён как результат yield и записан в result.

const questionGenerator = function* () {
    const answer = yield '5 add 5 = ?'
    console.log(answer, ' answer')
}

const question = questionGenerator();

console.log(question.next().value, ' - question.next().value')
question.next(10);

console.log('***********************************************************')

const questionGenerator2 = function* () {
    const answer = yield 5
    console.log(answer, ' answer')
}

const question2 = questionGenerator2();

let valueFromYield = question2.next().value
console.log(valueFromYield, ' - valueFromYield')
//console.log(valueFromYield ** 2, ' - valueFromYield ** 2')
question2.next(valueFromYield ** 2);

console.log('***********************************************************')

const ageGenerator = function* () {
    const answer = yield 'How old are You?';
    yield answer >= 18 ? 'Adult' : "Child"
}

const profile = ageGenerator();

console.log(profile.next().value); // 'How old are you?'
console.log(profile.next(20).value); // 'Adult';