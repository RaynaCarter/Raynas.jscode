//1 Sleep In
//The parameter weekday is True if it is a weekday, and the parameter vacation
// is True if we are on vacation.
// We sleep in if it is not a weekday or we're on vacation.
// Return True if we sleep in.
function sleep_in(vacation, weekday) {


    if ( vacation == true && weekday == false){
        return false;
    }else{
        return true;
    }

}

//2 Monkey Trouble
//We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each
// is smiling. We are in trouble if they are both smiling or if neither of them is smiling.
// Return True if we are in trouble.
function monkey_trouble (a_smile, b_smile){
    if (a_smile == true && b_smile ==true){
        return true;
    }
    if (a_smile != true && b_smile != true){
        return true;
    }
    if (a_smile != b_smile){
        return false;
    }
}
// String Times
//Given a string and a non-negative int n,
// return a larger string that is n copies of the original string.

function string_times (string, intn){
    var answer = "";

    for(var i = 0; i < intn; i++){
        answer = answer + string;
    }
    return answer;
}
//Front Times
//Given a string and a non-negative int n, we'll say that the front of the string is the
// first 3 chars, or whatever is there if the string is less than length 3.
// Return n copies of the front;
function front_times (string, intn){
    var answer = "";
    var section = string.substring(0,3);
    for(var i = 0; i < intn; i++){

        answer = answer + section;
    }
    return answer;
}
//String Bits
//Given a string, return a new string made of every other char starting with the first,
// so "Hello" yields "Hlo".


    function string_bits (string){
        var answer = "";
        var length=  string.length
        if (length == 0 ){
            return answer;
        }
        if (length >=3) {
            for(var i = 0; i < length; i = i + 2){

                answer = answer + string[i];
            }

        }else{
            answer = answer + string[1];
        }

        return answer;
    }

// Caught Speeding
//You are driving a little too fast, and a police officer stops you. Write code to compute the result,
// encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result
// is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result
// is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

    function caughtSpeeding (speed, birth){
    var answer = 0;
    if (birth){
        if (speed <= 65){
            answer += 0;
        }
        if (speed >= 66 && speed <= 86){
            answer += 1;
        }
        if (speed >= 86){
            answer += 2;
        }

    }
    if (birth == false){
        if (speed <= 60){
            answer += 0;
        }
        if (speed >= 61 && speed <= 80){
            answer += 1;
        }
        if (speed >= 81){
            answer += 2;
        }

    }
    return answer;
}

//Fizz Buzz
//Given a number, return the string form of the number followed by "!".
// So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number,
// and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz".
// Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3.
// What will the remainder be when one number divides evenly into another?

function fizz_buzz (num){
    answer = "";
    var fizz = "Fizz";
    var buzz = "Buzz";
    var fizzbuzz = "FizzBuzz";
    if (num % 5 == 0 && num % 3 == 0){
        answer += fizzbuzz;
    }else{
        if (num % 3 == 0){
            answer += fizz;
        }
        if (num % 5 == 0){
            answer += buzz;
        }
    }
    if (num % 5 != 0 && num % 3 != 0){
        answer += num +"!";
    }
    return answer;
}

// Tea Party
//We are having a party with amounts of tea and candy.
// Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great.
// A party is good (1) if both tea and candy are at least 5.
// However, if either tea or candy is at least double the amount of the other one, the party is great (2).
// However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

function teaParty(num1,num2) {
    var answer = 0;
    if (num1 < 5 || num2 < 5) {
        answer += 0;
    } else {

        if (num2 >= 2 * num1 || num1 >= 2 * num2) {
            answer += 2;
        }
        else {
            if (num1 >= 5 && num2 >= 5) {
                answer += 1;
            }
        }
    }
    return answer;
}

// Black Jack
//Given 2 int values greater than 0, return whichever value is nearest to 21 without going over.
// Return 0 if they both go over.

function blackjack(a,b) {
    var answer = 0
    if (a > 21 && b > 21) {
        return 0;
    }
    else if( (a<=21) && (b>21)){
        return a;
    }
    else if(b<=21 && a>21){
        answer=b;
    }
    else if (a > b) {
        answer += a;
    }

    else if (b > a){
        answer += b;
    }
    return answer;
}

//Given 3 int values, a b c, return their sum.
// However, if one of the values is the same as another of the values, it does not count towards the sum.

function loneSum (a,b,c){
    var answer = 0
    if ((a != b) && (a != c) && (b != c)){
        answer += a + b + c;
    }
    else if(a == b && a == c){
        return 0;
    }
    else if(a == b){
        answer +=  c;
    }
    else if(a == c){
        answer +=  b;
    }
    else if(b == c){
        answer += a ;
    }
    return answer;
}

//Given an array of ints, return true if 6 appears as either the first or last element in the array.
// The array will be length 1 or more

function firstLast6(input){


    if(input[0] == 6 || input[input.length-1] == 6) {
        return true;
    }
        return false;

}

//Given an array of length 2, return true if it contains a 2 or a 3.

function has23(input){
    if(input[0]== 2|| input[0] ==3 || input[1]==2 || input[1]==3 ){
        return true;function firstLast6(input){


            if(input[0] == 6 || input[input.length-1] == 6) {
                return true;
            }
            return false;

        }

//Given an array of length 2, return true if it contains a 2 or a 3.

        function has23(input){
            if(input[0]== 2|| input[0] ==3 || input[1]==2 || input[1]==3 ){
                return true;
            }else{
                return false;
            }

        }

//Given an int array length 3,
// if there is a 2 in the array immediately followed by a 3, set the 3 element to 0.
// Return the changed array.

        function fix23(input){

            if(input[0]== 2 && input[1] ==3 ){
                input[1] = input[1] - 3
                return [2,input[1],input[2] ]
            }else if(input[1]== 2 && input[2] ==3){
                input[2]=input[2]-3
                return [input[0],2,input[2] ]
            }else if ((input[1] != 2 && input[2] !=3) || (input[0] != 2 && input[1] !=3 )){
                return input;
            }
            return answer ;
        }

    }else{
        return false;
    }

}

//Given an int array length 3,
// if there is a 2 in the array immediately followed by a 3, set the 3 element to 0.
// Return the changed array.

function fix23(input){

    if(input[0]== 2 && input[1] ==3 ){
        input[1] = input[1] - 3
        return [2,input[1],input[2] ]
    }else if(input[1]== 2 && input[2] ==3){
        input[2]=input[2]-3
        return [input[0],2,input[2] ]
    }else if ((input[1] != 2 && input[2] !=3) || (input[0] != 2 && input[1] !=3 )){
        return input;
    }
    return answer ;
}

//Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy"
// and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive).
// We'll say that a y or z is at the end of a word if there is a space (“ “) immediately following it.
function countYZ(array){
    array = array.toLowerCase();
    var answer =0
    for(var i =0; i< array.length;i++){
        if(i == (array.length-1)){
            if(array[i] == "y" || array[i] == "z" ){
                answer = answer+1;
            }

        }
        if(array[i]== " "){
            if(array[i-1] == "y" || array[i-1] == "z" ){
                answer=answer + 1
            }

        }

    }
    return answer;
}


//Given two strings, return true if either of the strings appears at the very end
// of the other string, ignoring upper/lower case differences (in other words, the computation
// should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

function endOther(array,arrayTwo){
    array = array.toLowerCase();
    arrayTwo = arrayTwo.toLowerCase();
    if(arrayTwo.endsWith(array) || array.endsWith(arrayTwo)){
        return true;
    }else{
        return false;
    }
}

//Return a version of the given string, where for every star (*) in the string the star and
// the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd"
// also yields "ad"
function starOut(string){
    var answer="";
    for(var i =0;i<string.length;i++){
        if((string[i]!="*")&&(string[i+1]!="*")&&(string[i-1]!="*")){
            answer = answer + string[i];
        }
    }
    return answer;
}


//A sandwich is two pieces of bread with something in between. Return the string that is
// between the first and last appearance of "bread" in the given string, or return the empty
// string "" if there are not two pieces of bread.
function getSandwich(string){
    var answer ="";
    var first = string.indexOf("bread");
    var sec = string.lastIndexOf("bread")
    if(string.includes("bread")){
        answer+= string.slice([first+5],[sec])
    }
    return answer;

}





//Given a non-empty array, return true if there is a place to split the array so that the
// sum of the numbers on one side is equal to the sum of the numbers on the other side.
function canBalance(array){
    var answer =0
    var other =0
    for(var i=0; i<array.length;i++){
        answer+=array[i];
        other=0
        for(var o =i+1; o<array.length;o++){
            other+=array[o];
        }
        if(answer==other){
            return true;
        }

    }
    return false;
}



//Say that a "clump" in an array is a series of 2 or more
//adjacent elements of the same value. Return the number of clumps in the given array

function countClumps(array){
    var answer = 0;
    for(var i = 0; i<array.length; i++){
        if(array[i] == array[i-1] && array[i] != array[i+1]){
            answer = answer +1;

        }
    }
    return answer;
}

//Given three ints, a b c, one of them is small, one is medium and one is large.
// Return true if the three values are evenly spaced,
// so the difference between small and medium is the same as the difference between medium and large.
function evenlySpaced(a,b,c){
    var max = Math.max(a,b,c);
    var min = Math.min(a,b,c);
    var average = (min+max)/2;
    if(average==a||average==b||aaverage==c){
        return true;
    }else{
        return false;
    }
}










function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}
