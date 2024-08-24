function showPrimes() {
    let num;
    while (true) {
        let n = prompt("Enter a positive integer:");
        num = parseFloat(n);

        if (num && !isNaN(num) && num > 1 && Number.isInteger(num)) {
            break;
        }
        continue;
    }

    let primes = [];

    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    const resultDiv = document.getElementById('result');
    alert(`For n = ${num} : Prime numbers are ${primes.join(', ')}`);
}

showPrimes();