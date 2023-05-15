// // ======================question 2========================
// //2. Write a JavaScript program that accept two integers and
// //display the larger. Also show if the two integers are equal.

// let num_1 = +prompt("enter no 1")
// let num_2 = +prompt("enter no 2")
// if(num_1>num_2){
//     document.write("num 1: ", num_1 , " is greater")
// }
// else if(num_2>num_1){
//     document.write("num 2: ", num_2 , " is greater")
// }
// else{
//     document.write("both numbers are equal")
// }

// // ====================question 3=======================
// // 3. Write a program that takes input a number from user &
// //state whether the number is positive, negative or zero
// let num_1 = +prompt("enter no")
// if(num_1>0){
//     document.write("num : ", num_1 , " is positive")
// }
// else if(num_1 < 0){
//     document.write("num : ", num_1 , " is negative")
// }
// else{
//     document.write("number is zero")
// }


// //====================question 4=========================
// //4. Write a program that takes a character (i.e. string of
// //    length 1) and returns true if it is a vowel, false otherwis



// let char = prompt("enter a character");
// let a =false;
// if (char.length == 1){
//     if (char === "a" ){
//        a = true;
//        document.write("True <br>")
//     }
//     else if(char === "e"){
//         a = true;
//     }
//     else if(char === "i"){
//         a = true;
//     }
//     else if(char === "o"){
//         a = true;
//     }
//     else if(char === "u"){
//         a = true;
//     }
//     if (a === true){
//         document.write("true")
//     }
//     else{
//         document.write("false")
//     }
// }
// else{
//     document.write("you have not entered a  single character")
//  }








// //===================question 5========================
// //  5. Write a program that
// //a. Store correct password in a JS variable.
// //b. Asks user to enter his/her password
// //c. Validate the two passwords:
// //i. Check if user has entered password. If not, then
// //give message “ Please enter your password”
// //ii. Check if both passwords are same. If they are
// //same, show message “Correct! The password you
// //entered matches the original password”. Show
// //“Incorrect password” otherwise.




// let current_password = prompt("enter your current password")
// let confirmed_password = prompt("enter your password");
// if(confirmed_password.length==0){
//     document.write("enter password please");
// }

// if(current_password === confirmed_password){
//     document.write("yes your current and confirmed passwords are same")
// }
// else{
//     document.write("your current and confirmed passwords are not same")
// }



// //===================question 6========================
// // 6. This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }


// var greeting;
// var hour = 13;
// if(hour<18){
//     greeting = "good day"
//     document.write(greeting)
// }
// else{
//     greeting = "good evening"
//     document.write(greeting)
// }


//===================question 7========================
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = +prompt("enter time in 24 hour clock")
if(time >= 00 && time <12){
    document.write("good morning")
}
else if(time >= 12 && time <17){
    document.write("good afternoon")
}
else if(time >= 17 && time <21){
    document.write("good evening")
}
else if(time >= 21 && time <24){
    document.write("good night")
}