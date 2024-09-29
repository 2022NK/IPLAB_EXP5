function* primeGenerator(limit) {
    if (limit < 2) return;
    
    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    };

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

const limit = 30;
const primeNumbers = primeGenerator(limit);

console.log(`Prime numbers up to ${limit}:`);
for (const prime of primeNumbers) {
    console.log(prime);
}
