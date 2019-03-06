// Symbol.asyncIterator
// for-await-of

// Асинхронный итератор:
// Метод next() асинхронного итератора возвращает промисс, который потом резолвится в {value: ‘some val’, done: false}
// Применение: iterator.next().then(({ value, done })=> {//{value: ‘some val’, done: false}}

const promises = [
    new Promise(resolve => resolve(1)),
    new Promise(resolve => resolve(2)),
    new Promise(resolve => resolve(3)),
]

async function test() {
    for await (const curr of promises) {
        console.log(curr, ' - curr')
    }
}

test()