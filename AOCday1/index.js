const fs = require('fs')

const array = fs.readFileSync('./input.txt', { encoding: 'utf-8'}).trim().split('\r\n')



function findNums(input){
    const values = input.map(string => {
    let first = string.split('').find(e => !Number.isNaN(Number(e)))
    let last = string.split('').findLast(e => !Number.isNaN(Number(e)))
    return Number(first + last)
    })
    return values
}

let finalArray = findNums(array)

let sum = finalArray.reduce((sum, value) => sum + value, 0)

console.log(sum)






