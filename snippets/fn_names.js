var sum = function sum(n) {
  if (!n)
    return 0;
  return n + sum(n - 1);
};
console.log(sum(4));
var sum2 = sum;
sum = function () {
  return 0;
};
console.log(sum(4));
console.log(sum2(4));
