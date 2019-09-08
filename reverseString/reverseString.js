const reverseString = function(string) {
    var str = string;
    str = str.toString();
    var strArray = str.split('');
    var revArray = strArray.reverse();
    var newStr = revArray.join('');
    return newStr;

}

module.exports = reverseString
