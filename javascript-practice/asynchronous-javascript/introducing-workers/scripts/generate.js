// our worker code

// Listen for the message from the main thread.
// If the message command is `generate`, call `generatePrimes()`
addEventListener("message", (message) => {
    if (message.data.command === "generate")
        generatePrimes(message.data.quota);
});

// Generate primes (very inefficiently)
function generatePrimes(quota) {
    function isPrime(n) {
        for (let i = 2; i < Math.sqrt(n); i++)
            if (n % i === 0)
                return false;
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate))
            primes.push(candidate);
    }
    // When we have finished, send a message to the main thread,
    // including the number of primes we generated.
    postMessage(primes.length);
}
