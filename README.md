# _Mr. Roboger's Neighborhood_

#### By _Geoffrey Gao_

#### _An application that will return a robot's communication based on the user's name and input number_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Bootstrap_
* _GIT and Github_

## Description

_This website contains a short for that, when filled out, will output a robot communication. The communication will be generated and formatted based on the inputs. The project demonstrates solid understanding of the new concepts from the Arrays and Looping course including for loops, array mapping, and business/UI logic._

## Github Pages Link

[Click here](https://geoffreygao1.github.io/Mr.-Robogoer-s-Neighborhood/) to view the Github Pages website

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html in your browser_

## Known Bugs

* _N/A_

## License

_MIT_

Copyright (c) _2022_ _Geoffrey Gao_


## Test Driven Development Plan

#### describe: numCounter(number)

Test: "It should return an array of numbers from 0 to the user's inputted number  
Code: numCounter(5);  
Expected Output: [0,1,2,3,4,5]  

#### describe: numSplit(number)

Test: "It should return an array of digits from the user's inputted number"  
Code: numSplit(15);  
Expected Output: [1,5]  

#### describe: numConvert(number,name)

Test: "It should return the number if the user input number does not contain the digits 1, 2, or 3"  
Code: numConvert(4);  
Expected Output: 4  

Test: "It should return the string "Beep!" if the user input number contains 1"  
Code: numConvert(10);  
Expected Output: "Beep!"  

Test: "It should return the string "Boop!" if the user input number contains 2"  
Code: numConvert(12);  
Expected Output: "Boop!"  

Test: "It should return the string "Won't you be my neighbor, name?" if the user input number contains 3 and inputs a name"  
Code: numConvert(123, "Geoffrey");  
Expected Output: "Won't you be my neighbor, "Geoffrey?"  

#### Describe roboger(number,name)

Test: "It should return an array of converted numbers (either numbers or converted strings with name) that count from 0 to the user input number"  
Code: roboger(14, "Geoffrey");  
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor, Geoffrey?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor, Geoffrey?", "Beep!"]  

#### Describe reverseRoboger(number, name)

Test: "It should return an array of converted numbers (either numbers or converted strings with name) that count from user input number down to 0"  
Code: roboger(5, "Geoffrey);  
Expected Output: [5, 4, "Won't you be my neighbor, Geoffrey?", "Boop", "Beep"]  
