var arr = [];
console.log(arr.length);
arr[0] = "First";
console.log(arr.length, arr[0], arr[1]);
arr[2] = "Third";
console.log(arr.length, arr[1], arr[2]);
arr["name"] = "Cool array";
console.log(arr.length, arr["name"]);
arr["5"] = "Weird property";
console.log(arr.length, arr["5"]);
var key1 = {
  toString: function () {
    return "0";
  }
};
arr[key1] = "First again";
console.log(arr.length, arr[0]);
