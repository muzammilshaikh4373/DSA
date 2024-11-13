let data = [10, 20, 21, 12, 50, 30, 60, 90, 80, 44];
let secondLargestNumber;

for (i = 0; i < data.length; i++) {
  for (j = 0; j < data.length; j++) {
    if (data[i] < data[j]) {
      let temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
  }
}
secondLargestNumber = data[data.length - 2];
// console.log(secondLargestNumber)

const findSecondLargestNumber = (arr, num) => {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr[arr.length - num];
};

console.log(findSecondLargestNumber([15, 90, 80, 76, 56, 40, 20], 1));
