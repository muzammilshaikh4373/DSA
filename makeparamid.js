let rows = 10;

for (let i = 1; i <= rows; i++) {
  let pyramidRow = '';

  // Add spaces for alignment
  for (let j = 1; j <= rows - i; j++) {
    pyramidRow += ' ';
  }

  // Add stars for pyramid shape
  for (let k = 0; k < 2 * i - 1; k++) {
    pyramidRow += '*';
  }

  console.log(pyramidRow);
}
