// ==============================question 1=========================
// let parent = document.querySelector("#body");
// let link = document.createElement("p");
// link.innerHTML = "https://www.youtube.com/"
// parent.appendChild(link);

// link.addEventListener("click",function(){
//     alert("hello world")
// })








// // ==============================question 2=========================


                // UNCOMMENT THE
                // HTML & CSS CODE 
                // FOR THIS QUESTION


// let img_1 = document.querySelector("#img_1");

// img_1.addEventListener("click" ,function(){
//     alert("thanks for purchaisng iphone from us")
// })








// // ==============================question 3=========================


                // UNCOMMENT THE
                // HTML CODE 
                // FOR THIS QUESTION


// ============header=======
// let parent = document.querySelector("#table");
// let Index = document.createElement("b");
// Index.innerHTML = "INDEX";
// parent.appendChild(Index)
// Index.style.marginLeft = "20px"

// let Name = document.createElement("b");
// Name.innerHTML = "NAME";
// parent.appendChild(Name)
// Name.style.marginLeft = "20px"

// let Class = document.createElement("b");
// Class.innerHTML = "CLASS";
// parent.appendChild(Class)
// Class.style.marginLeft = "20px"


// // ===function for creating new rows
// function addItems(SNO,ST_NAME,ST_CLASS,BTN,ROW,SNO_VALUE,ST_NAME_VALUE,ST_CLASS_VALUE) {
//      SNO = document.createElement("span");
//      ST_NAME = document.createElement("span");
//      ST_CLASS = document.createElement("span");
     
//     BTN.innerHTML = "delete";

//     SNO.style.marginLeft = "30px"
//     ST_NAME.style.marginLeft = "60px"
//     ST_CLASS.style.marginLeft = "30px"
//     BTN.style.marginLeft = "40px"

//     SNO.innerHTML = SNO_VALUE;
//     ST_NAME.innerHTML = ST_NAME_VALUE;
//     ST_CLASS.innerHTML = ST_CLASS_VALUE;

//     ROW.appendChild(SNO)
//     ROW.appendChild(ST_NAME)
//     ROW.appendChild(ST_CLASS)
//     ROW.appendChild(BTN)
// }

// // ==================row 1
// let ROW_1 = document.querySelector("#st_1")

// let SNO_1, ST_NAME_1,ST_CLASS_1,BTN_1
// BTN_1 = document.createElement("button");
// addItems(SNO_1,ST_NAME_1,ST_CLASS_1,BTN_1,ROW_1,0,"sarah",10)


// // ==================row 2
// let ROW_2 = document.querySelector("#st_2")
// let SNO_2, ST_NAME_2,ST_CLASS_2,BTN_2
// BTN_2 = document.createElement("button");
// addItems(SNO_2,ST_NAME_2,ST_CLASS_2,BTN_2,ROW_2,1,"ayesha",11)



// // ==================row 3
// let ROW_3 = document.querySelector("#st_3")
// let SNO_3, ST_NAME_3,ST_CLASS_3,BTN_3
// BTN_3 = document.createElement("button");
// addItems(SNO_3,ST_NAME_3,ST_CLASS_3,BTN_3,ROW_3,2,"sehla",12)


// // ==================row 4
// let ROW_4 = document.querySelector("#st_4")
// let SNO_4, ST_NAME_4,ST_CLASS_4,BTN_4
// BTN_4 = document.createElement("button");
// addItems(SNO_4,ST_NAME_4,ST_CLASS_4,BTN_4,ROW_4,3,"safwan",13)

// BTN_1.addEventListener("click",function(){
//     ROW_1.innerHTML = ""
// })

// BTN_2.addEventListener("click",function(){
//     ROW_2.innerHTML = ""
// })

// BTN_3.addEventListener("click",function(){
//     ROW_3.innerHTML = ""
// })


// BTN_4.addEventListener("click",function(){
//     ROW_4.innerHTML = ""
// })





// // =================================question 4=======================

                // UNCOMMENT THE
                // HTML CODE 
                // FOR THIS QUESTION



// check html of question 4 for question 4





// // ==============================question 5=========================

                // UNCOMMENT THE
                // HTML CODE 
                // FOR THIS QUESTION

// let change_number = document.querySelector(".change_number");
// let main = document.querySelector(".main");

// let reset = document.createElement("button");
// let increase = document.createElement("button");
// let decrease = document.createElement("button");
// let number = document.createElement("button");
// let repeated_change = 0;

// // ==============main=======
// main.style.width = "100%"
// main.style.height = "100vh"
// main.style.display = "flex"
// main.style.justifyContent = "space-evenly"
// main.style.textAlign = "center"

// // ============reset,increase,decrease==========
// reset.innerHTML = "reset"
// increase.innerHTML = "increase"
// decrease.innerHTML = "derease"

// function setStyle(value){
//     value.style.height = "100px"
//     value.style.width = "150px"
//     value.style.marginTop = "100px"
//     value.style.marginLeft = "100px"
//     value.style.fontSize = "30px"
// }

// setStyle(decrease)
// setStyle(reset)
// setStyle(increase)

// main.appendChild(decrease)
// main.appendChild(reset)
// main.appendChild(increase)

// // ===================number=========

// number.innerText = "start";
// change_number.appendChild(number);
// number.style.height = "100px"
// number.style.width = "150px"
// number.style.marginTop = "200px"
// number.style.marginLeft = "600px"
// number.style.fontSize = "80px"
// number.style.border = "none"
// number.style.background = "transparent"


// // =============events======
// increase.addEventListener("click",function(){
//    number.innerText = ++repeated_change;
//    console.log(number);

// })

// reset.addEventListener("click",function(){
//     number.innerText = "start";
//     repeated_change = 0;

// })

// decrease.addEventListener("click",function(){
//     number.innerText = --repeated_change
 
// })

