function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function printPrimeNumbersInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// Print prime numbers between 1 and 100
printPrimeNumbersInRange(1, 100);
