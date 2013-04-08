var arr = ["First", "Second", "Third"],
    obj = {
      "0": "1st",
      "1": "2nd",
      "2": "3rd",
      "length": 3,
      "name": "My name",
      "age": 22
    }, p;
arr.name = "Cool!";
for (p in arr)
  console.log(p);
for (p in obj)
  console.log(p);
for (p = 0; p < arr.length; p++)
  console.log(arr[p]);
for (p = 0; p < obj.length; p++)
  console.log(obj[p]);