const repeatString = function(string, num) {
    var newString = '';
    if (num < 0) {
        return 'ERROR';
    } else if (num == 0) {
        return '';
    } else {
        for (i = 1; i <= num; i++) {
            newString += string;
        }
    }
    return newString;
}

module.exports = repeatString
