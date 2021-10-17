var fs = require('fs');


const readSample = () => {
    var filename = 'sample_sudoku/random.txt';
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        console.log('OK: ' + filename);
        console.log(data.split("\n"));
        return convertToArray(data.split("\n"));
    });
}

const convertToArray = (lines) => {
    let arrays = [];
    lines.forEach(line => {
        let array = new Array();
        line.forEach(letter => {
            console.log(letter);
        });
        arrays.push(array);
    });
    return arrays;
}

readSample();