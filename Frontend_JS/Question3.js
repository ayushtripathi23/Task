//Suppose you have an array of 101 integers.
// This array is already sorted and all numbers in this array are consecutive.
// Each number only occurs once in the array except one number which occurs twice.
// Write a js code to find the repeated number.
//e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

Occurence = (arr, size) => {
  var i, j;
  for (i = 0; i < size; i++) {
    for (j = i + 1; j < size; j++) {
      if (arr[i] == arr[j]) document.write(arr[i] + " ");
    }
  }
};

var arr = [4, 2, 3, 4, 5, 1, 2, 3, 1];
var arr_size = arr.length;
Occurence(arr, arr_size);
