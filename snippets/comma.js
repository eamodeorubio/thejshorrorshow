function rubyish(x) {
  return a = !x,
      b = 22,
      console.log("Some 'statement' here"),
      a + b;
}
console.log(rubyish(true));

for (var i = 0, j;
     i < 10;
     j ? j : j = 0, console.log(j), i++, j = i * 2);