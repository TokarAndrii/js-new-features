const rangeObject = {
    from: 1,
    to: 10,

    //Все итераторы имеют метод next(), который возвращает объект результата 
    //в формате { done: Boolean, value: any }. 
    //Объект результата имеет два свойства: value - следующее значение, и done - буль указывающий на окончание перебора.


    //Symbol.iterator will allow you to override the of operator 
    //https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/

    [Symbol.iterator]() {
        let current = this.from;
        const last = this.to;
        return {
            next() {
                return {
                    done: current > last,
                    value: current <= last ? current++ : undefined
                }
            }
        }
    }
}


for (const curr of rangeObject) {
    console.log(curr, ' - curr')
}

const rangeArray = [...rangeObject];
console.log(rangeArray, ' - rangeArray')
