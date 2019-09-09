const sumAll = function(num1, num2) {
    var sum = 0;
    if ((typeof num1 !== "number" || typeof num2 !== "number") ||
        (num1 < 0 || num2 <0)) {
        return "ERROR";
    } else if (num2 < num1) {
        for (i = num2; i <= num1; i++) {
            sum += num2;
            num2++;
        }
        return sum;
    } else {
        for (i = num1; i <= num2; i++) {
            sum += num1;
            num1++;
        }
        return sum;
    }
}
module.exports = sumAll
