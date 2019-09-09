const ftoc = function(temp) {
  var C = (temp - 32) * (5/9);
  if (C % 1 == 0){
    return Number(C);
  } else {
  return Number(C.toFixed(1));
  }
}

const ctof = function(temp) {
  var F = temp * (9/5) + 32;
  if (F % 1 == 0) {
    return Number(F);
  } else{
  return Number(F.toFixed(1));
  }
}

module.exports = {
  ftoc,
  ctof
}
