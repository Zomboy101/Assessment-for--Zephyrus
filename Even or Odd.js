function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// input:
console.log(isEvenOrOdd(5)); // Output: "Even"
console.log(isEvenOrOdd(8)); // Output: "Odd"
