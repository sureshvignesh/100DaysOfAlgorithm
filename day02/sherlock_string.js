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

// Complete the isValid function below.
function isValid(s) {
    let arr = s.split('')
    let map = {}
    let count_map = {}
    for (let index = 0; index < arr.length; index++) {
        let score = count_map[arr[index]] ? count_map[arr[index]] + 1 : 1
        count_map[arr[index]] = score
        map[score] = map[score] ? map[score] + 1 : 1
        if (score != 1) {
            map[score - 1] = map[score - 1] - 1
            if (map[score - 1] == 0) { delete map[score - 1] }
        }
    }
    let count_array = Object.keys(map)

    if (count_array.length == 2 && (map[count_array[0]] == 1 || map[count_array[1]] == 1)) {
        if ((Math.abs(count_array[0] - count_array[1]) == 1) || map[1] === 1) {
            return "YES"
        }
    }
    return 'NO'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
