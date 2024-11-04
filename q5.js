function inverterString(str) {
  let inverted = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverted += str[i];
  }
  return inverted;
}

// Exemplo de uso:
const originalString = "exemplo";
console.log(inverterString(originalString));
