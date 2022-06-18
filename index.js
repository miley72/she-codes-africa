unction isPrime(number) {
    var NumIsPrime = `${number} is a prime number`;
    var NumNotPrime = `${number} is not a prime number`;
    if (number == 1 || number == 2) return NumIsPrime;
    if (number <= 1) return NumNotPrime;
    if (number % 2 == 0 && number > 2) return NumNotPrime;
    const s = Math.sqrt(number)
    for (let i = 3; i <= s; i = 2) {
        if (number % 1 === 0) 
        return NumNotPrime;
    }
    return NumIsPrime;
}
console.log(isPrime(25));
