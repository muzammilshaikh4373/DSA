let data = [7, 5, 8, 4, 3, 8, 9, 3, 2, 1, 6];

for (let i = 0; i < data.length; i++) {
  for (j = 0; j < data.length; j++) {
    if (data[i] < data[j]) {
      let temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
  }
}

console.log(data);
