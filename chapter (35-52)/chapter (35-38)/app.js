// // =========================question 1===================
// function date(){
//     let date = new Date();
//     document.write(date);
// }
// date();



// //=========================question 2===================
// let firstName = prompt("enter first name");
// let lastName = prompt("enter last name");

// function greet(firstName , lastName){
//     document.write("hello " + firstName + " " + lastName);
// }
// greet(firstName,lastName);



// //=========================question 3===================
// let firstNumber = +prompt("enter first number ");
// let secondNumber = +prompt("enter second number");

// function add(firstName , secondNumber){
//    return(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber))
// }
// document.write(add(firstNumber , secondNumber))




// //=========================question 4===================
// let num_1 = +prompt("enter number 1");
// let num_2 = +prompt("enter number 2");
// let opeartor = prompt("enter the opeartor");

// function calculator(num_1 , num_2 , opeartor){
//     if(opeartor === "+"){
//         document.write(num_1 +" " +  opeartor + " " +  num_2 + " = " +(num_1+num_2))
//     }
//     else if(opeartor === "-"){
//         document.write(num_1 +" " +  opeartor + " " +  num_2 + " = " +(num_1-num_2))
//     }
//     else if(opeartor === "*"){
//         document.write(num_1 +" " +  opeartor + " " +  num_2 + " = " +(num_1*num_2))
//     }
//     else if(opeartor === "/"){
//         document.write(num_1 +" " +  opeartor + " " +  num_2 + " = " +(num_1/num_2))
//     }
//     else{
//         document.write("wring input")
//     }

// }
// calculator(num_1 , num_2, opeartor)




// //=========================question 5===================
// let number = +prompt("enter a number");
// function square(number){
//     document.write(number + "<sup> 2 </sup>" + " = " + number**2);
// }
// square(number); 



// //=========================question 6===================
// let number = +prompt("enter a number");
// let input = number;
// let parameter = number;

// function factorial(parameter){
//     if(parameter > 1 ){
//        parameter--;
//        number = number * parameter;
//        factorial(parameter);
//        return number;
//     } 
//     else{
//         return 1;
//     }
// }

// let output = factorial(parameter);
// document.write("factorial of number " + input + " is : "  +output)





// //=========================question 7===================
// let start_number = +prompt("enter a starting number")
// let end_number = +prompt("enter an ending number")

// function counting(start_number , end_number){
//     if(start_number > end_number){
//         for (let i = start_number ; i >= end_number ; i--){
//             document.write(i + "<br>")
//         }
//     }
//     else if(start_number < end_number){
//         for (let i = start_number ; i <= end_number ; i++){
//             document.write(i + "<br>")
//         }
//     }
//     else if(start_number === end_number){
//         document.write("both numbers are equal")
//     }
// }

// counting(start_number , end_number);









// //=========================question 8 needs to be rechecked===================

// let base = +prompt("enter base of triangle")
// let perpendicular = +prompt("enter perpendicular of triangle")

// function calculateHypotenuse(base ,perpendicular){
//     let hypotanous =  ((base**2) + (perpendicular**2));
//     return hypotanous;
//     function calculateSquare(){
//         let squareOfHypotanous = hypotanous**2;
//         return squareOfHypotanous; 
//     }
// }

// let hypotanous = new calculateHypotenuse(base,perpendicular);
// let squareOfHypotanous = hypotanous.calculateSquare();
// console.log(hypotanous);
// console.log(squareOfHypotanous);








// //=========================question 9===================
// let width = 90;
// let height =20;
// function area( height , width){
//     let A = height*width;
//     return A;
// }

// let Area = area(20,width);
// document.write("area is : " +Area)









// //=========================question 10===================

function palendrome(){
    let string = prompt("enter a word");
    let str = string;
    let u = 0;
    for(let i = string.length-1 ;i >=0 ; i--){
        str = str.replace(str[u],str[i])
        u++;
    }
    if(str === string){
        document.write("yes they are palendromes")
    }
   else{
    document.write("no they are not palendromes")
   }
}

palendrome()







// // =========================question 11 //incomplete===================
// let string = 'the quick brown fox';
// let firstChar  = string[0].toUpperCase();
// console.log(firstChar);
// for(let i = 0;i<string.length;i++){
//     if(string.slice(i,i+1)===" "){
//          firstChar = string[i+1].toUpperCase();
//         console.log(firstChar);
//     }
// }







// // =========================question 12===================
// let str ='Web Development Tutorial';
// let temp = [];
// function len(str){
//     str = str.split(" ");
//     str_len = str.length;
//     for(let i = 0 ; i <str_len-1;i++){
//         for(let j = i + 1 ; j<str_len ;j++){
//             if(str[i].length > str[j].length ){
//                 temp[0] = str[i];
                
//             }
//             else if(str[i].length < str[j].length ){
//                 temp[0] = str[j];
                
//             }
           
//         }
//     }
 
// }
// len(str);
// document.write(temp[0]);




// // =========================question 13===================
// let string = prompt("enter a string")
// let word = prompt("enter a word to search")
// let count = 0;
// function Count(str,word){
//     for(let i = 0 ; i<str.length ; i++){
//         if(str[i] === word){
//             count++;
//         }
//     }
//     return count;
// }
// document.write( "word " + word + " occurs " +  Count(string,word) + " times");






// // =========================question 14===================
// let radius = +prompt("enter radius")
// function calcCircumference(radius){
//     return(2*3.142 *radius);
// }
// function calcArea(radius){
//     return (3.142 *(radius**2))
// }

// document.write("The circumference is : " +calcCircumference(radius) + "<br>")
// document.write("The area is : " +calcArea(radius))