// // ==========question 1 ============

// // 1. Declare and initialize an empty multidimensional array.
// // (Array of arrays)

// let arrauy = [[], []]


// // ==========question 2 ============

// let array_1 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]


// // ==========question 3 ============
// for(let i =1; i<=10; i++){
//     console.log(i);
// }


// // ==========question 4 ============

// let number = +prompt("enter a no")
// let len = +prompt("enter length")
// console.log("multiplication table of ", number);
// for(let i = 1 ; i<=len;i++){
//     console.log(number + " X "+ i + " = " + number*i);
// }


// // ==========question 5 ============
// let fruits =["apple", "banana", "mango", "orange","strawberry"]

// for (let i =0 ;i<fruits.length ; i++){
//     console.log(fruits[i]);
    
// }
// for (let i =0 ;i<fruits.length ; i++){
// console.log("element at index " , i , " is ", fruits[i]);
// } 

// ==========question 6 ============
// document.write("<h1>couting</h1>"); 
// for (let i = 1; i<=14;i++){
//     document.write( i , " , " )
// }
// for (let i = 15; i<=15;i++){
//     document.write( i ,  )
// }

// document.write("<h1>reverse couting</h1>"); 
// for (let i = 10; i>=2;i--){
//     document.write( i , " , " )
// }
// for (let i = 1; i>=1;i--){
//     document.write( i)
// }




// document.write("<h1>even</h1>"); 
// for (let i = 0; i<=18;i++){
//    if(i%2===0){
//     document.write( i , " , ")
//    }
// }
// for (let i = 19; i<=20;i++){
//     if(i%2===0){
//      document.write( i)
//     }
//  }


 
// document.write("<h1>odd</h1>"); 
// for (let i = 1; i<=18;i++){
//    if(i%2!==0){
//     document.write( i , " , ")
//    }
// }
// for (let i = 19; i<=20;i++){
//     if(i%2!==0){
//      document.write( i)
//     }
//  }


//  document.write("<h1>series</h1>"); 
// for (let i = 1; i<=18;i++){
//    if(i%2===0){
//     document.write( i , "k , ")
//    }
// }
// for (let i = 19; i<=20;i++){
//     if(i%2===0){
//      document.write( i ,"k ")
//     }
//  }






// ==========question 7 ============
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let user_input = prompt("enetr an item to search");
// let flag = false;
// let index = 0;
// for(i = 0 ; i < A.length ; i++){
//     if(A[i] === user_input){
//        flag = true;
//        index = i
//     }
// }
// if (flag){
//     console.log(A[index] , " is avaialable at index ", index , " in our bakery");
// }
// else{
//     console.log("we are sorry " , user_input , " is not availabe");
// }



// ==========question 8 ============
// let A = [24, 53, 78, 91, 12];
// let temp;
// console.log("the array items are ", A);
// for(let i = 0; i<A.length-1 ; i++){
//     for (let j = i+1; j <A.length ; j++){
//         if (A[i] > A[j]){
//              temp = A[i];
//              A[i] = A[j];
//              A[j] = temp;
//         }
//     }
// }
// console.log("the max no is ", A[-1]);



// ==========question 9 ============
// let A = [24, 53, 78, 91, 12];
// let temp;
// console.log("the array items are ", A);
// for(let i = 0; i<A.length-1 ; i++){
//     for (let j = i+1; j <A.length ; j++){
//         if (A[i] > A[j]){
//              temp = A[i];
//              A[i] = A[j];
//              A[j] = temp;
//         }
//     }
// }
// console.log("the min no is ", A[0]);


// ==========question 10 ============
for(let i = 1 ; i<=99;i++){
    if ( i%5===0){
        document.write(i, " , ");
    }
}
for(let i = 99 ; i<=100;i++){
    if ( i%5===0){
        document.write(i);
    }
}

