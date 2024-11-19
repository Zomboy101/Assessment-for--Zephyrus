function reverseString(input) {
    return input.split('').reverse().join('');
}

// Input
const originalString = "My name is Chris";
const reversedString = reverseString(originalString);

//Output
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
