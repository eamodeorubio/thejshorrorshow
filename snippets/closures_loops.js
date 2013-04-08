function makeLoggersFor(arr) {
  var size = arr.length, r = [];
  for (var i = 0; i < size; i++) {
    r[i] = function () {
      console.log(i, arr[i]);
    };
  }
  return r;
}
var logs = makeLoggersFor([1, 2]);
logs[0]();
logs[1]();
function makeLoggersFor2(arr) {
  var size = arr.length, r = [];
  for (var i = 0; i < size; i++) {
    r[i] = function (i, el) {
      return function () {
        console.log(i, el);
      };
    }(i, arr[i]);
  }
  return r;
}
var logs = makeLoggersFor2([1, 2]);
logs[0]();
logs[1]();
function makeLoggersFor3(arr) {
  return arr.map(function (el, i) {
    return function () {
      console.log(i, el);
    };
  });
}
var logs = makeLoggersFor3([1, 2]);
logs[0]();
logs[1]();
var makeLoggersWithStyleFor = function () {
  function makeLogger(el, i) {
    return function () {
      console.log(i, el);
    };
  }

  return function (arr) {
    return arr.map(makeLogger);
  };
}();
var logs = makeLoggersWithStyleFor([1, 2]);
logs[0]();
logs[1]();