var a={
  valueOf:function() {
    console.log("valueOf a");
    return "1";
  }
};
var b={
  valueOf:function() {
    console.log("toString b");
    return "2";
  }
};
var r;
console.log(typeof Number(a), typeof Number(b));
console.log(r=a + b, typeof r);
console.log(r=b + a, typeof r);
console.log(r=a - b, typeof r);
console.log(r=b - a, typeof r);
console.log(r=+a, typeof r);
console.log(r=+b, typeof r);
