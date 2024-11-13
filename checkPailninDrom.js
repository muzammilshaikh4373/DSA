let str = "mom";


for (let i = 0; i < str.length / 2; i++) {
  if (str[i] == str[str.length - 1 - i]) {
    console.log(`given string is pailindrom `);
    break
  } else {
    console.log(`given string is not pailindrom `);
    break
  }
}


