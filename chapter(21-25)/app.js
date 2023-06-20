// /* =====================================question 1======================
//  1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// */

// let first_name = prompt("enter ur first name")
// let last_name = prompt("enter ur last name")

// let full_name = first_name+ " " + last_name;
// alert("welcome "+ full_name);




/*  // ===============================question 2==========================
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
*/


// let model = prompt("enter your fav mobile phone model")
// let len = model.length;
// alert("your fav mobile phone model is : " + model + "\nlegth of your input is:  " + len)




// =====================================question 3=============================
// // 3. Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser .

// let country_name ="pakistani";
// let indexx = 0;
// for (let  i = 0 ;i<country_name.length;i++){
//     if (country_name[i] == "n"){
//         indexx = i;
//         break;
//     }
// }

// document.write("index of n is : " + indexx)






// // ===================================question 4========================
// // Write a program to find the last index of letter “l” in the
// // word “Hello World” and display the result in your browser.

// let value = "hello world";
// let count = 0;
// let indexx = 0;
// for (let  i = 0 ;i<value.length;i++){
//     if (value[i] == "l"){
//         count+=1;
//         indexx = i;
//     }
// }

// document.write("frequency of l : " + count+ " and  last index of  l : "+ indexx)







// // ====================================question 5========================
// // Write a program to find the character at 3rd index in the
// // word “Pakistani” and display the result in your browser.

// let value = "pakistani";
// let indexx = value[3];
// document.write("character at 3rd index is: " + indexx)




// ====================================question 6==========================

// let first_name = prompt("enter ur first name")
// let last_name = prompt("enter ur last name")

// let full_name = first_name.concat(last_name);
// alert("welcome "+ full_name);



// ================================question 7=========================
// let city = "hyderabad";
// console.log( city.replace("hyder" , "islam"));


// // ======================================question 8==============

// let message = "Ali and Sami are best friends. They play cricket and football together.";

// for(let i = 0 ;i<message.length ; i++){
//     if(message.slice(i,i+3) === "and"){
//         message = message.replace(message.slice(i,i+3)," & ");
//     }
// }
// console.log(message);




// // ======================question 9==============
// let Str = "247";
// console.log(Str);
// console.log(typeof(Str));
// let num = +Str;
// console.log(num);
// console.log(typeof(num));




// // ======================question 10==============

// let input = prompt("enter a string");
// document.write(input.toUpperCase());

// // ======================question 11==============

// let input = prompt("enter a string");
// let first_char = (input[0]);
// first_char = first_char.toUpperCase();

// input = (input.slice(1));
// input = input.toLowerCase();

// let output = first_char + input
// console.log(output);



// // ======================question 12==============
// let num = 35.36 ;
// let str = num.toString();
// str = str.replace("." , "");
// console.log(str);


// // ======================question 13==============
// let input = prompt("enter a string");

// //ascii codes
// let ascii_of_exc_mark = 33;
// let ascii_of_comma = 44;
// let ascii_of_dot = 46;
// let ascii_of_At = 64;

// let flag = false;


// for(let i = 0 ; i<input.length;i++){
//     let convert = input.charCodeAt(i);
//    if(convert === ascii_of_exc_mark || convert === ascii_of_comma || convert === ascii_of_dot || convert === ascii_of_At){
//         flag = true;
//     }
// }

// if(flag == true){
//     alert("enter valid input")
// }
// else{
//     alert("thanks for entering valid input")
// }


// // ======================question 14==============
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let input = prompt("enter what u want");

// input = input.toLowerCase();

// let flag = false;

// for(let i = 0 ; i<A.length ; i++){
//     if(input === A[i]){
//         flag = true;
//     }
// }

// if(flag == true){
//     console.log("available");
// }
// else{
//     console.log("unavailable");
// }


// // ======================question 15==============
// // 15. Write a program to take password as an input from
// // user. The password must qualify these requirements:
// // a. It should contain alphabets and numbers
// // b. It should not start with a number
// // c. It must at least 6 characters long
// // If the password does not meet above requirements,
// // prompt the user to enter a valid password.
// // For character codes of a-z, A-Z & 0-9, refer to ASCII
// // table at the end of this document.


// // creating variables for ascii codes;
// let ascii_of_0 = 49;
// let ascii_of_small_a = 97
// let ascii_of_capital_A = 65;

// let pass = prompt("enter a password");


// //checking length
// let flag = false;
// if(pass.length < 6){
//     flag = true;
// }

// //checking numbers
// let count = 0;

// for(let i = 1; i<pass.length; i++){
//     let pass_1 = pass.charCodeAt(i);
//     for(let j = ascii_of_0 ; j < 58 ; j++){
//         if(pass_1 === j){
//             count += 1 ;
//         }
//     }
// }


// //checking small aphabets
// let count_1 = 0;

// for(let i = 0; i<pass.length; i++){
//     let pass_1 = pass.charCodeAt(i);
//     for(let j = ascii_of_small_a ; j < 123 ; j++){
//         if(pass_1 === j){
//             count_1 +=1 ;
//         }
//     }
   
// }


// //checking capital aphabets
// let count_2 = 0;

// for(let i = 0; i<pass.length; i++){
//     let pass_1 = pass.charCodeAt(i);
//     for(let j = ascii_of_capital_A ; j < 91 ; j++){
//         if(pass_1 === j){
//             count_2 +=1 ;
//         }
//     }
// }

// //checking index 0
// let count_3 = 0;
// let pass_1 = pass.charCodeAt(0);
// for(let i = ascii_of_0; i<58; i++){
//         if(pass_1 === i){
//             count_3 +=1 ;
//         }
// }

// if(flag === true && count === 0 ){
//     prompt("your password' length is smaller than 6 \ndoes not contain number\nenter a new password")
//  }

//  else if(flag === true && count_1 === 0 ){
//     prompt("your password' length is smaller than 6\ndoes not contain small alphabet\nenter a new password")
//  }


//  else if(flag === true && count_3>=1){
//     prompt("your password' length is smaller than 6 \nfirst index is a number\nenter a new password")
    
// }


// else if(count === 0 && count_1 === 0 ){
//     prompt("does not contain number \ndoes not contain small alphabet\nenter a new password")
 
//  }
 



//  else if(count === 0 &&  count_3>=1){
//     prompt("does not contain number \nfirst index is number\nenter a new password")
//  }
 

//  else if( count_1 === 0 &&  count_3>=1){
//     prompt("does not contain small alphabet \nfirst index is a number\nenter a new password")
//  }
 

// else if(flag === true){
//     prompt("your password' length is smaller than 6\nenter a new password")
//  }


//  else if( count === 0 ){
//     prompt("does ot contain numbers \nenter a new password")
//  }


//  else if( count_1 === 0){
//     prompt("does not contain small alphabet\nenter a new password")
//  }



//  else if(count_3>=1){
//     prompt("first index is a number\nenter a new password")
//  }




// // ======================question 16==============
// let university = "University of Karachi";
// let spl;

// for(let i = 0; i<university.length ; i++){
//     spl =  university[i].split(" ");
//     spl = spl.toString();
//     if(spl === ","){
//         spl = " ";
//     }
//     console.log(spl);
// }






// // ======================question 17==============
// let input = prompt("enter a string");
// let last_char = input[input.length-1];
// console.log("last character is : " + last_char);




// // ======================question 18==============
// let string = "The quick brown fox jumps over the lazy dog";
// string = string.toLowerCase();
// let count = 0;
// for(let i = 0 ; i<string.length ; i ++){
//     if(string.slice(i,i+3) === "the"){
//         count += 1;
//         console.log(string.slice(i,i+3));
//     }
// }
// if(count >= 1){
//     console.log("the word 'the' has occured : " + count + " times in given string");
// }
// else{
//     console.log("there is no occurrennce of the word 'the'");
// }