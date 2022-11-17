Test Driven Development Plan

describe: numCounter(number)

Test: "It should return an array of numbers from 0 to the user's inputted number
Code: numCounter(5);
Expected Output: [0, 1,2,3,4,5]

describe: numSplit(number)

Test: "It should return an array of digits from the user's inputted number"
Code: numSplit(15);
Expected Output: [1,5]

describe: numConvert(number)

Test: "It should return the number if the user input number does not contain the digits 1, 2, or 3"
Code: numConvert(4);
Expected Output: 4

Test: "It should return the string "Beep!" if the user input number contains 1"
Code: numConvert(10);
Expected Output: "Beep!"

Test: "It should return the string "Boop!" if the user input number contains 2"
Code: numConvert(12);
Expected Output: "Boop!"

Test: "It should return the string "Won't you be my neighbor?" if the user input number contains 3"
Code: numConvert(123);
Expected Output: "Won't you be my neighbor?"

Describe roboger(number)

Test: "It should return an array of converted numbers (either numbers or converted strings) that count from 0 to the user input number"
Code: roboger(14);
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]

Describe reverseRoboger(number)

Test: "It should return an array of converted numbers (either numbers or converted strings) that count from user input number down to 0"
Code: roboger(5);
Expected Output: [5, 4, "Won't you be my neighbor?", "Boop", "Beep"]
