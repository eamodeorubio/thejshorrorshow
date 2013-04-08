var helloWorld = function (x) {
  if (x === undefined)
    return 'Hello world';
  return 'HaHaHa!';
};
console.log(helloWorld());
var undefined = true;
console.log(helloWorld());
var helloWorld2 = function (x) {
  if (x === void 0)
    return 'Hello world';
  return 'HaHaHa!';
};
console.log(helloWorld2());
