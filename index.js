//---------use recursion finish the below functions-----//
function sum(x, y) {
    if (x===0){
        return y;
    }
    elseif(y===0)
    {
    return x;
    }
    else{
     return(sum(x,y));
    }
    
console.log(sum(10,51));
}

function multiply(x, y) {
    if (x===0 || y===0){
        return 0;
    }
    else{
        return x*y;
    }
    
    console.log(multiply(10,50));
}


// the third divide numbers
function divide(x, y) {
    if (y===0 ){
        console.log('error!! you can"t do this operation');

    }
    else{
        return x/y;
    }
    
    console.log(divide(100,50));

}

// exercise N°1

//giving an input string return a same string but  remove all parentheses and replace it with commas ponctuation(','),
//the first letter should uppercased and   don't forget the full point in the end of paragraph (".");
// if not a string return false
// ponctuation('it"s morning),let"s hangout)===>'It"s morning,let"s hangout.'
// ponctuation(231456),let's hangout)===>false*
// make both methods  for loops and while loop


function ponctuation() {
var str="ghofr()ran(e)";
//var str1=str.replace("()",",");
var point="."

for ( var i = 0 ; i < str.length ; i++ ){
if (str[i]=="(" && str[i]==")")
str[i]=",";
}
str= str.concat(point)
console.log(str);
}

// exercise N°2:
// count down the input number to 1
//// make both methods  for loops and recursion

// countDown(4)==>
// 4
// 3
// 2
// 1
// countDown("hello")==>
// 4
// 3
// 2
// 1
// the numbers range should be from -100 to 100

//if it"s string  count the length and return the countdown
function countDown(number) {
var number=10;
var Type= typeof number;
if (Type=="number"){
    for(var i=number;i<0;i--){
        console.log(number);
    }

}elseif(Type=="string")
string =number.length;
for(var i=string;i<0;i--){
    console.log(string);
}

}

// exercise N°3:
// program to find the factorial of a number
// make it with recursion
// factorial(3) returns 3 * factorial(2)
// factorial(2) returns 3 * 2 * factorial(1)
// factorial(1) returns 3 * 2 * 1 * factorial(0)
// factorial(0) returns 3 * 2 * 1 * 1
function factorial(x) {
if (x===0){
    return 1;
}
else
{
    return x * fact(x-1);
}
console.log(factorial(10));


}

// exercise N°4:

// giving a string str and number n(number of time string should repeat) return the repeated  string n times:

//  repeatString("dog",3)==>"dogdogdog"
// repeatString("no",0)==>"give a number bigger than zero"

function repeatString(str, n) {
    if (n===0){
        console.log("give a number bigger than zero");
    }
    elseif(n<0)
    {
        console.log("give a positive number");
    }
    else {
    for(var i=0;i=n;i++)
    str=str.concat(str);
    }
    }
    

//Advanced
// exercise N°1
// check the number is prime in giving range between x and y
// Prime numbers between 25 and 50 are:
// 29
// 31
// 37
// 41
// 43
// 47
function isPrime(x, y) {
    
}

