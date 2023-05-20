// ====================CHAPTER (14 - 16)===============



// // =====================QUESTION : 1===================
// // 1. Declare an empty array using JS literal notation to store
// // student names in future.

// let arr = [];


// // =====================QUESTION : 2===================
// // 1. Declare an empty array using JS object notation to store
// // student names in future.



// let arr_1 = [];


// // =====================QUESTION : 3===================
// // . Declare and initialize a strings array


// let str_arr = ["sarah", "ayesha", "noor"];


// // =====================QUESTION : 4===================
// // . Declare and initialize a number array


// let num_arr = [1, 2, 3];


// // =====================QUESTION : 5===================
// // . Declare and initialize a boolean array


// let bool_arr = [true, false];


// // =====================QUESTION : 6===================
// // . Declare and initialize a mixed array


// let mixed_arr = ["sarah", "ayesha", "noor", 1, 2, 3];



// // =====================QUESTION : 7===================
// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// //     BS, BCOM, MS, M. Phil., PhD). Show the listed
// //     qualifications in your browser like:



// let qual_arr = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("<h2> qualification </h2>");
// for (i=0; i<qual_arr.length; i++){
//     document.write("( ", i+1, " )");
//     document.write(qual_arr[i], "<br>");
// }




// // =====================QUESTION : 8===================
// // Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

// let name_arr = ["sarah", "ayesha", "noor fatima"]
// let scored_marks = [490, 492, 493];

// document.write("scored marks of ", name_arr[0], " are ",scored_marks[0]," . percentage: ", (scored_marks[0]*100)/500 ,"<br>");

// document.write("scored marks of ", name_arr[1], " are ",scored_marks[1]," . percentage: ", (scored_marks[1]*100)/500 ,"<br>");

// document.write("scored marks of ", name_arr[2], " are ",scored_marks[2]," . percentage: ", (scored_marks[2]*100)/500 ,"<br>");





// // =====================QUESTION : 9===================
// // 9. Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.


// let arr = ["blue", "green", "red", "white", "brown", "pink", "black","maroon"];
// console.table("old array", arr);
// //part => a
// let begining_color = prompt("enter the color name you want to add at begining");
// arr.unshift(begining_color);
// console.table("added the color at the begining of array", arr);
// //part => b
// let end_color = prompt("enter the color name you want to add at end");
// arr.push(end_color);
// console.table("added the color at the end of array", arr);
// //part => c
// arr.unshift("yellow", "orange");
// console.table("added the names of two more colors at the begining", arr);
// //part => d
// arr.shift();
// console.table("deleted the first color", arr);
// //part => e
// arr.pop();
// console.table("deleted the last color", arr);
// //part => f
// let index_no_to_add = +prompt("emter index no at which you want to add a value");
// let color_name = prompt("enter name of color you want to add");
// arr.splice(index_no_to_add, 0, color_name);
// console.table("added the color: ", color_name, " at index no: ",index_no_to_add, arr);
// //part => g
// let index_no_to_del = +prompt("emter index no at which you want to del a value");
// let quantity = prompt("how many colors you want to delete");
// arr.splice(index_no_to_del, quantity);
// console.table("deleted the ",quantity, " colors from index no: ",index_no_to_del, arr);


// // =====================QUESTION : 10===================
// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.

// let scores = [74,384,251,43,12,3544];
// let sort_arr = scores.sort(function(a,b){
//     if(a>b){
//         return b
//     }
//     else{
//         return -1
//     }
// });
// console.log("unsorted array ", scores);
// console.log("sorted array ", sort_arr);



//  // =====================QUESTION : 12===================
// //  12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)

// let arr = [" my", " name", " is", " sarah", " sajid"];
// let joined = arr.join(" ");
// console.log(arr.join(""));




// // =====================QUESTION : 13===================
// // Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)

// let arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// console.log(arr);
// console.log("0th element ",arr[0]);
// console.log("1st element ",arr[1]);
// console.log("2nd element ",arr[2]);
// console.log("3rd element ",arr[3]);



// =====================QUESTION : 14===================
// 4. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
let arr = [];
arr.push("keyboard");
arr.push("mouse");
arr.push("printer");
arr.push("monitor");
console.log(arr);
arr.reverse();
console.log("0th element ",arr[0]);
console.log("1st element ",arr[1]);
console.log("2nd element ",arr[2]);
console.log("3rd element ",arr[3]);




