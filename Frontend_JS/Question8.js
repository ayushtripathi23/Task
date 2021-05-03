//Assume there is a json object of this format
// var obj = {
//  “id” : 4, “name” : “abc”,
//  “id” : 10, “name” : “ab2”,
//  “id” : 5, “name” : “abc3”,
//  “id” : 6, “name” : “abc5”
// }
// Write a code to sort the object by id

var obj = [
  { id: 4, name: "abc" },
  { id: 10, name: "abc1" },
  { id: 5, name: "abc2" },
  { id: 6, name: "abc3" },
];

console.log("Before Sort", obj);

var newObj = obj.sort(function (a, b) {
  return a.id - b.id;
});

console.log("After Sort", newObj);
