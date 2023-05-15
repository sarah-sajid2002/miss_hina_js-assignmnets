// // ======================question 1====================
// // 1. Write a program to take “city” name as input from user. If
// // user enters “Karachi”, welcome the user like this:
// // “Welcome to city of lights”


// let city_name = prompt("enter name of city");
// if (city_name==="karachi"){
//     document.write("welcome to city of lights")
// }
// else{
//     document.write("welcome to " , city_name)
// }


// // ======================question 2====================
// // 2. Write a program to take “gender” as input from user. If the
// // user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.


// let gender = prompt("enter your gender");
// if(gender==="male"){
//     document.write("good morning sir")
// }
// else if(gender==="female"){
//     document.write("good morning mam")
// }
// else{
//     document.write("enter gender correctly")

// }



// // ======================question 3====================
// // 3. Write a program to take input color of road traffic signal
// // from the user & show the message according to this table:
// //     Signal color            Message
// //     Red                     Must Stop
// //     Yellow                  Ready to move
// //     Green                   Move now


// let color = prompt("enter color");
// if(color==="red"){
//     document.write("must stop")
// }
// else if(color==="yellow"){
//     document.write("ready to move")
// }
// else if(color==="green"){
//     document.write("move now")
// }
// else{
//     document.write("enter color properly")

// }




// // ======================question 4====================
// // 4. Write a program to take input remaining fuel in car (in
// //     litres) from user. If the current fuel is less than 0.25litres,
// //     show the message “Please refill the fuel in your car”

// let fuel = prompt("enter fuel in liters");
// if (fuel<0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("no need to refill right now")
// }




//  // ======================question 6====================
// // 6. Write a program to take input the marks obtained in three
// // subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute
// // grade as per following table:


// let obt_mark_1 = +prompt("enter marks of subject 1")
// let obt_mark_2 = +prompt("enter marks of subject 2")
// let obt_mark_3 = +prompt("enter marks of subject 3")

// let total_mark_1 = +prompt("enter total marks of sub 1")
// let total_mark_2 = +prompt("enter total marks of sub 2")
// let total_mark_3 = +prompt("enter total marks of sub 3")

// let add_total_mark = total_mark_1 + total_mark_2 + total_mark_3;
// let add_obt_mark = obt_mark_1 + obt_mark_2 + obt_mark_3;
// let per = (add_obt_mark*100)/add_total_mark;
// document.write(per)

// document.write("<h1> mark sheet </h1>");
// document.write("total marks: " , add_total_mark, "<br>");
// document.write("obtained marks: " , add_obt_mark, "<br>");
// document.write("percentage: " ,per , "% <br>");

// // if(per <=100 && per >=80){
// //     document.write("grade: " ,A-one , "<br>");
// //     document.write("Remarks: " ,excellent , "<br>");
// // }
// // else if(per <80 && per >=70){
// //     document.write("grade: " ,A , "<br>");
// //     document.write("Remarks: " ,good , "<br>");
// // }
// // else if(per >=60){
// //     document.write("grade: " ,B , "<br>");
// //     document.write("Remarks: " ,"need to improve" , "<br>");
// // }

// // else {
// //     document.write("grade: " ,F , "<br>");
// //     document.write("Remarks: " ,sorry , "<br>");
// // }




//  // ======================question 7====================
// // 7. Guess game:
// // Store a secret number (ranging from 1 to 10) in a variable.
// // Prompt user to guess the secret number.
// // a. If user guesses the same number, show “Bingo! Correct
// // answer”.
// // b. If the guessed number +1 is the secret number, show
// // “Close enough to the correct answer”.

// let random_number = 9;
// let number = +prompt("enter a number");
// if (number > random_number){
//     document.write("you entered a bigger number try guessing a smaller one")
// }
// else if (number < random_number){
//     document.write("you entered a smaller number try guessing a bigger one")
// }
// else if (number == random_number){
//     document.write("binggo correct")
// }

//  // ======================question 8====================

// // 8. Write a program to check whether the given number is
// // divisible by 3. Show the message to the user if the number
// // is divisible by 3.

// let no = +prompt("enter number");
// if(no % 3 == 0){
//     document.write(no , " is divisible by 3")
// }
// else{
//     document.write("not divisible")
// }



//  // ======================question 9====================
// // 9. Write a program that checks whether the given input is an
// // even number or an odd number.

// let no = +prompt("enter number");
// if(no % 2 == 0){
//     document.write("even")
// }
// else{
//     document.write("odd")
// }


//  // ======================question 9====================
// // 10. Write a program that takes temperature as input and
// // shows a message based on following criteria
// // a. T > 40 then “It is too hot outside.”
// // b. T > 30 then “The Weather today is Normal.”
// // c. T > 20 then “Today’s Weather is cool.”
// // d. T > 10 then “OMG! Today’s weather is so Cool.”


// let T = +prompt("enter temperature");
// if(T > 40){
//     document.write("It is too hot outside.")
// }
// else if(T > 30){
//     document.write("The Weather today is Normal.")
// }
// else if(T > 20){
//     document.write("Today’s Weather is cool.")
// }
// else if(T > 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }
// else{
//     document.write("OMG! Today’s weather is so Cool.")
// }







//  // ======================question 9====================
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


let no_1 = +prompt("enter First number")
let no_2 = +prompt("enter Second number")
document.write("<h1> ADDITION </h1>", no_1 , "  +  ", no_2 , "  =  ", no_1 + no_2, "<br>")
document.write("<h1> SUBTRACTION </h1>",no_1 , "  -  ", no_2 , "  =  ", no_1 - no_2, "<br>")
document.write("<h1> MULTIPLICATION </h1>",no_1 , "  *  ", no_2 , "  =  ", no_1 * no_2, "<br>")
document.write("<h1> DIVISION </h1>",no_1 , "  /  ", no_2 , "  =  ", no_1 / no_2, "<br>")
document.write("<h1> MODULOUS </h1>",no_1 , "  %  ", no_2 , "  =  ", no_1 % no_2, "<br>")