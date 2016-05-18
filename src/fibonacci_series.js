'use strict';

function fibonacci_series(n) {

    var fibonacciNumbers = [0];

    return buildFibonacci(n, fibonacciNumbers);
}

function buildFibonacci(n, fibonacciNumbers) {

    if (n === 1) {
        fibonacciNumbers.push(1);
    }
    if (n > 1) {
        buildFibonacci(n - 1, fibonacciNumbers);

        fibonacciNumbers.push(fibonacciNumbers[n - 1] + fibonacciNumbers[n - 2]);
    }

    return fibonacciNumbers;
}

module.exports = fibonacci_series;
