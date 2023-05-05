// // ======================= ASSIGNMNET 5===========================
// //              ========== QUESTION 1 ===================
// let num_1 = +prompt("enter number 1");
// let num_2 = +prompt("enter number 2");
// let result = num_1 + num_2;
// document.write("the sm um of " + num_1 + " and " + num_2 + " is " + result);



// //              ========== QUESTION 2 ===================
// let num_1 = +prompt("enter number 1");
// let num_2 = +prompt("enter number 2");
// document.write("the sum of " , num_1 , " and " , num_2 , " is " , num_1+num_2 + "<br>");
// if (num_1>num_2){
// document.write("the subtraction of " , num_1 , " and " , num_2 , " is " , num_1-num_2 + "<br>");
// }
// else{
//     document.write("the subtraction of " , num_1 , " and " , num_2 , " is  -" , num_2-num_1 + "<br>");
// }
// document.write("the multiplication of " + num_1 + " and " + num_2 + " is " + num_1*num_2 + "<br>");
// document.write("the module of " + num_1 + " and " + num_2 + " is " + num_1%num_2 + "<br>");


// //                ========== QUESTION 3 ===================

// let value ;
// document.write("value after variable declaration is ", value, "<br>")
// value = +prompt("enter number");
// document.write("initial value : ", value, "<br>")
// ++value;
// document.write("value after increment is : ", value, "<br>")
// value = value +7;
// document.write("value after adding 7 is : ", value, "<br>")
// --value;
// document.write("value after decrement is : ", value, "<br>")
// value = value%3;
// document.write("remainder of value after dividing by 3 is : ", value, "<br>")



// //                ========== QUESTION 4 ===================
// let price = +prompt("enter price of one ticket");
// let calculation =  +prompt("how many tickets u want to buy?");
// document.write("total price of buying ", calculation, " ticket(s) is ", price * calculation)

// //                ========== QUESTION 5 ===================

// let number = +prompt("enter number");
// document.write("table of ",number,  " <br> ");
// for (let i =1; i<=10;i++){
//     document.write(number + " X  "+  i+ " = "+ + number*i+ " <br> ")
// }


// //                ========== QUESTION 6 ===================

// let celcius = +prompt("enter tempertaure in celsius");
// let fahrenhite = +prompt("enter tempertaure in fahrenhite");

// document.write("temperature ",celcius, " in fahrenhite is ", ((celcius*(9/5))+32), "<sup>o</sup> F <br>");
// document.write("temperature ",fahrenhite, " in celsius is ", ((fahrenhite-32)*(5/9)), "<sup>o</sup> C");


//  //                 ========== QUESTION 7 ===================
//  let price_1 = 650;
//  let quantity_1 = +prompt("enter quantity of item 1");
//  let price_2 = 100;
//  let quantity_2 = +prompt("enter quantity of item 2");
//  let shipping_charges = 100;
//  document.write("price of item 1 is: ",price_1, "<br>");
//  document.write("price of item 2 is: ",price_2, "<br>");
//  document.write("quantity of item 1 is: ",quantity_1, "<br>");
//  document.write("quantity of item 2 is: ",quantity_2, "<br>");
//  document.write("shipping price is: ",shipping_charges, "<br>");
//  document.write("total cost is is: ",(price_1*quantity_1)+(price_2*quantity_2)
//  +shipping_charges, "<br>");

// //                 ========== QUESTION 8 ===================
// let total_marks = +prompt("enter total marks");
// let obtained_marks = +prompt("enter obtained marks");
// let per = (obtained_marks*100)/total_marks;
// document.write("total marks are: ",total_marks, "<br>")
// document.write("obtained marks are: ",obtained_marks, "<br>")
// document.write("percentage is: ",per, "%")



// //                 ========== QUESTION 9 ===================
// let dollar = +prompt("enter how many dollars you want to convert");
// let riyal = +prompt("enter how many riyals you want to convert");
// let conversion = (dollar*104.80) + (riyal*28);
// document.write("<b> currency in pkr</b> <br><br>");
// document.write("total currency in pkr is : ", conversion)



// //                  ========== QUESTION 10 ===================

// let number = +prompt("enter a number");
// let calc = ((number+5)*10)/2;



// //                  ========== QUESTION 11 ===================
// let curr_year = +prompt("enter current year");
// let birth_year = +prompt("enter birth year");
// let age = curr_year - birth_year ;

// document.write("current year is: ", curr_year, " <br>")
// document.write("birth year is: ", birth_year, " <br>")
// document.write("age is: ", age)


// //                  ========== QUESTION 12 ===================
// let radius = +prompt("enter radius");
// let circumference = 2* Math.PI * radius;
// let area = Math.PI *(radius**2);
// document.write("radius is: ", radius, " <br>");
// document.write("circumference is: ", circumference, " <br>");
// document.write("area is: ", area, " <br>")


// //                  ========== QUESTION 13 ===================
// let fav_snack = prompt("enter your fav snack");
// let curr_age = +prompt("enter your current age");
// let max_age = +prompt("enter your estimated max age");
// let snack_per_day =  +prompt("enter amount of snack u eat per day");
// let value = 0;
// let loop_value = (max_age - curr_age)*365;
// for (let i=1;i<=loop_value;i++){
//      value = value+snack_per_day;
// }
// document.write("your fav snack : ",fav_snack, " <br>");
// document.write("your current age : ",curr_age, " <br>");
// document.write("your estimated max age : ",max_age, " <br>");
// document.write("amount of snack u eat per day : ",snack_per_day, " <br>");
// document.write("you will need : ",value, " snack to last you until the ripe old age of ", max_age , "<br>");




