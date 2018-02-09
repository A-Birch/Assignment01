/*eslint-env browser*/

/*
// STEP 1. Convert the following identifiers to Camel Case notation:

    var someMonth;
    function theMonth;   // function to return current month
    const currentMonth;   // a constant
    var summerMonth;    // an array of summer months
    function myLibrary // a function  
 
// STEP 2. Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

    52.2 // numeric literal 
    "Hello World!" // string literal 
    false or true // Boolean literal 
    null // literal null value


// STEP 3. Give me two examples of complex/variable expressions.

    var averageScore = (score1 + score2 + score3 + score4) / 4;

    function calcHypotenuse(a, b) {
      return(Math.sqrt((a * a) + (b * b)));
    }


// STEP 4. Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

    var firstName, lastName, address, city, state, zipCode, yourAge, referralSource, mayWeContactYou;

// STEP 5. Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.
    
    // First method.
    
    var firstName = "Marilyn", lastName = "Manson", address = "724 N Alpine Dr", city = "Beverly Hills", state = "CA", zipCode = "90210", yourAge = 99, referralSource = "Google", mayWeContactYou = true;
    
    // Second method.

    var firstName = "Marilyn"; 
    var lastName = "Manson";
    var address = "724 N Alpine Dr";
    var city = "Beverly Hills";
    var state = "CA"; 
    var zipCode = "90210"; 
    var yourAge = 99; 
    var referralSource = "Google"; 
    var mayWeContactYou = true;
    
    // Third method.

    var firstName; 
    var lastName;
    var address;
    var city;
    var state; 
    var zipCode; 
    var yourAge; 
    var referralSource; 
    var mayWeContactYou;
    firstName = "Marilyn";
    lastName = "Manson";
    address = "724 N Alpine Dr";
    city = "Beverly Hills";
    state = "CA"; 
    zipCode = "90210";
    yourAge = 99;
    referralSource = "Google";
    mayWeContactYou = true;
*/

// STEP 6. Create 3 variables. For the first variable, add a number and a string and use console.log to display the coerced result. For the second variable, add a Boolean and a string and display the coerced result. For the third variable, add a number and a Boolean and display the coerced result. 

var firstVariable = 25 + " years";
window.console.log(firstVariable);

var secondVariable = true + " is not always true";
window.console.log(secondVariable);

var thirdVariable = 99 + true;
window.console.log(thirdVariable);


// STEP 7. Demonstrate your knowledge of hoisting. Write a program that returns undefined within the console window because of hoisting.

window.console.log(x);
var x = 10;

// STEP 8. Is the following string literal valid? If not, how would you fix it?

var someString = "Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\"";
window.console.log(someString);

// STEP 9. Create a variable that produces a null value in the console window. Also, create a variable that produces an undefined value in the console window.

var x = null;
window.console.log(x);

var y;
window.console.log(y);

// STEP 10. Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

var a = "string", b = 21, c = true, d = new Object(), e;
window.console.log(typeof a);
window.console.log(typeof b);
window.console.log(typeof c);
window.console.log(typeof d);
window.console.log(typeof e);

// STEP 11.	Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
/*
Hello Zak Ruvalcaba, welcome to the JavaScript class!

Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma. */
 

window.alert("Hello " + "Alex Berezkin" + ", welcome to the JavaScript class!");

// STEP 12.	Declare a variable called name and set it equal to your name. Then, substitute your name in the previous alert string with the variable instead.

var name = "Alex Berezkin";
course = "JavaScript"; // Initialize variable course for the step 13.
window.alert("Hello " + name + ", welcome to the " + course + " class!");

// STEP 13.	Declare a variable called course and set it equal to “JavaScript”. Then, rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

var course; // use hoisting

// STEP 14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
/*
Hello Zak Ruvalcaba.
Welcome to the JavaScript class! */

window.alert("Hello " + name + ". \nWelcome to the " + course + " class!");

// STEP 15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

name = window.prompt("Please enter your name:");
window.alert("Hello " + name + ". \nWelcome to the " + course + " class!");

// STEP 17.	Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window. 

x = 10;
y = 20;
window.console.log(x + y);

// STEP 18.	Declare a variable called x and assign it a value of 20. Next, add and assign 20 to that variable and display the result in the console window. The result should be 40.

var x = 20;
x += 20;
window.console.log(x);

// STEP 19.	Declare a variable called x and assign it a value of 20. Next, multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

var x = 20;
x *= 5;
window.console.log(x);

// STEP 20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Next, divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.

x = 20 % 3;
x /= 1;
window.console.log(x);

// STEP 21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

x = 10;
y = 20;
window.console.log(x == 10 && y > x);

// STEP 22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

x = 10;
y = 20;
window.console.log(x == y != false);

// STEP 23.	Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.

var widget = new Object();
window.console.log(typeof widget);

// STEP 24.	Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

window.console.log(widget instanceof Object);

// STEP 25.	Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.

window.console.log(x instanceof Object);

