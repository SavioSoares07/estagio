function isFibonacci(num) {
  let a = 0,
    b = 1,
    next = a + b;

  if (num === 0 || num === 1) return true;

  while (next <= num) {
    if (next === num) return true;
    a = b;
    b = next;
    next = a + b;
  }

  return false;
}

// Exemplo de uso:
const number = 21;
console.log(
  `O número ${number} ${isFibonacci(number) ? "Pertence" : "Não Pertence"}.`
);
