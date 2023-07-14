// // ==========================question 1=====================
// let a = +prompt("enter no 1")
// let b = +prompt("enter no 2")
// function power(a,b){
//     return a**b;
// }

// document.write(a + "<sup>"+b+"</sup>" + " = " + (a**b) );




// // ==========================question 2=====================
// let year = +prompt("enter a year");
// function leap(){
//     if(year % 4 ===0 ){
//         if(year % 100 && year % 400)
//         document.write(year + " is a leap year")
//     }
//     else{
//         document.write( year + " is not a leap year")
//     }
// }
// leap()






// // ==========================question 3=====================

// function calcultae_S (a,b,c){
//     return (a+b+c)/2;
// }

// function area(S){
//     return (S*(S - a)*(S - b)*(S - c));
// }


// let a = +prompt("enter side A of triangle")
// let b = +prompt("enter side B of triangle")
// let c = +prompt("enter side C of triangle")


// let S = calcultae_S(a,b,c);

// let Area = area(S);

// if(Area < 0 ){
//     Area = -(Area);
// }

// document.write("area of triangle is : " +Area)







// // ==========================question 4=====================
// let totalMarks = +prompt("enter total marks")
// let marks_1 = +prompt("enter marks of subject 1")
// let marks_2 = +prompt("enter marks of subject 2")
// let marks_3 = +prompt("enter marks of subject 3")

// let avg;
// let per;

// function mainFunction(totalMarks, marks_1, marks_2, marks_3) {
//    Average =  function avergae() {
//          avg = (marks_1 + marks_2 + marks_3) / 3;
//         return avg;
//     }
//     console.log(mainFunction().avergae());

//    Percentage =  function percentage() {
//          per = (avg * 100) / totalMarks;
//         return per;
//     }
//     console.log(mainFunction().percentage());
// }
// mainFunction()





// // ==========================question 5=====================
// function index(){
//     let string = prompt("enter a string")
//     let find = prompt("enter letter whose index u want to search for")
//     for(let i = 0 ;i<string.length;i++){
//         if(string[i] === find){
//             document.write("index of " + find + " is " +i);
//             break;
//         }
//     }
// }
// index();





// // ==========================question 6=====================
// function vowels(){
//     let sentence = "today we will go home on time"
//     document.write("sentence before removing vowels: <br>" +sentence + "<br>")
//     sentence = sentence.toLowerCase();
//     for(let i = 0 ;i<sentence.length;i++){
//         if(sentence[i] === "a" ||sentence[i] === "e"||sentence[i] === "i"||sentence[i] === "o"||sentence[i] === "u"){
//             sentence = sentence.replace(sentence[i],"")

//         }


// }
// document.write("sentence after removing vowels: <br>"+sentence)
// }
// vowels()





// // ==========================question 7=====================
// function count(){
//     let string = "Pleases read this application and give me gratuity are";
//     string = string.toLowerCase()
//     let value = "ea"
//     let Count = 0;

//     for(let i = 0 ;i<string.length;i++){
//         switch(string.slice(i,i+3)){
//             case value:
//                 Count++
//                 break
//         }

//     }
//     document.write("the word " +" ' " +value + "' " +  " has occured " +Count + " times")

// }
// count()





// // ==========================question 8=====================
// let distance = +prompt("enter distance in kilometer")
// function meter(){
//     let meter = distance*1000;
//     document.write(distance + " km " + " in meters is: " +meter +"<br>");
// }
// function inch(){
//     let inches = distance*39370.1;
//     document.write(distance + " km " + " in inches is: " +inches+"<br>");
// }
// function feet(){
//     let feets = distance*3280.84;
//     document.write(distance + " km " + " in feets is: " +feets+"<br>");
// }
// function centimeters(){
//     let cm = distance*100000;
//     document.write(distance + " km " + " in centimeters is: " +cm+"<br>");
// }

// meter();
// inch();
// feet();
// centimeters();







// // ==========================question 10=====================
// let input = prompt("enter amount to withdraw");

// while (input.length >= 4 || input.length <= 2) {
//     alert("enter amount to withdraw in hundreds only")
//     input = prompt("enter amount to withdraw");
// }

// let hundred = input.slice(0, 1);

// let fifties = input.slice(1, 3);
// let coins = input.slice(2,3)
// console.log(coins);
// let tens;
// let a;
// if (fifties >= 50) {
//     a = fifties - 50;
//     tens = a.toString();
//     tens = tens.slice(0,1)
    
//     coins = input.slice(2,3)
//     fifties = 1;
// }
// else if(fifties < 50){
//     tens = fifties.slice(0, 1);
//     coins = input.slice(2,3)
//     fifties = 0;
// }

// document.write("you entered :<b> " +input + " </b> <br>")
// document.write("you have  <b>" + hundred + "</b>  hundred note ,<b>" + fifties + "</b> fifty notes ,<b> " + tens + "</b>  ten notes and <b>" + coins + "</b> , coins")
