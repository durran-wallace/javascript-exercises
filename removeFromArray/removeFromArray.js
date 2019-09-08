const removeFromArray = function(array) {
    var arr = array;
    var arg = Array.from(arguments);
    for(i = 1; i < arg.length; i++) {
        if (arr.indexOf(arg[i]) == -1) {
            continue;
        } else {
            arr.splice(arr.indexOf(arg[i]), 1);
        }    
    }

    return arr;
}

module.exports = removeFromArray
