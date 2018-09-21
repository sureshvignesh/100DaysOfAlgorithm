// https://www.hackerrank.com/challenges/picking-numbers/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the pickingNumbers function below.
function pickingNumbers(arr) {
    let map = {}
    for (let index = 0; index < arr.length ; index++){
        map[arr[index]] = map[arr[index]] ? map[arr[index]] + 1 : 1
        if (arr[index] != 1) {
            map[arr[index]-1] = map[arr[index]-1] ? map[arr[index]-1] + 1 : 1
        }
    }
    return Math.max(...Object.values(map))


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a);

    ws.write(result + "\n");

    ws.end();
}
