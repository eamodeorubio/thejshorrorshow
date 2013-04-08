var outer = 'Hi there !';
function fn(){
  var inner="I'm local";
  console.log(inner, outer);
  if(true) {
    var other="other local";
    console.log(other);
  }
  other="changed";
  console.log(other);
}
fn();