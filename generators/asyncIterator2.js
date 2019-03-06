const axios = require('axios')
const resolveAllData = [
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(resp => resp.data),
    axios.get('https://jsonplaceholder.typicode.com/albums/1').then(resp => resp.data)
]

async function test() {
    for await (const curr of resolveAllData) {
        console.log('curr  - ', curr)
    }
}

test()