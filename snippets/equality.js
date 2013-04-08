var a = {
  valueOf: function () {
    return "2";
  }
};
console.log(1 == '1');
console.log(1 == true);
console.log(0 == '');
console.log(null == null);
console.log(null == undefined);
console.log(null == '');
console.log(null == 0);
console.log(NaN == NaN);
console.log(a == 2);
console.log(a == true);
console.log(a == false);
