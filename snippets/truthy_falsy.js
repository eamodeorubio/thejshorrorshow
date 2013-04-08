function sayHi(x) {
  if (!x)
    return console.log('Bye');
  console.log('Hi');
}
//What will this print?
sayHi(false);
sayHi(null);
sayHi([]);
sayHi(new Boolean(false));
