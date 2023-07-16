// //=========================question 3==================
let table = document.querySelector("#table");
let child_1 = document.querySelectorAll("#delete");
let child_2 = document.querySelectorAll("#edit");

let hidden_table = document.querySelector("#hidden_table")
let student_info = document.querySelector("#student_info")

let s_no = document.querySelector("#s_no")
let first_name = document.querySelector("#first_name")
let last_name = document.querySelector("#last_name")
let age = document.querySelector("#age")
let Class = document.querySelector("#class")

let done = document.querySelector("#done")
let back = document.querySelector("#back")

let parent_of_child_1;
let parent_of_td_1;
let parent_of_child_2;
let parent_of_td_2;

let len = child_1;

for (let i = 0; i < len.length; i++) {
    child_1[i].addEventListener("click", function () {
        parent_of_child_1 = child_1[i].parentNode;
        parent_of_td_1 = parent_of_child_1.parentNode;

        parent_of_td_1.innerHTML = ""
    })
    child_2[i].addEventListener("click", function () {

        parent_of_child_2 = child_2[i].parentNode;
        parent_of_td_2 = parent_of_child_2.parentNode;

        hidden_table.style.display = "block"
        table.style.opacity = "0.4"

        student_info.innerText = "edit info of " + parent_of_td_2.childNodes[3].innerText

    })

    back.addEventListener("click", function () {
        hidden_table.style.display = "none"
        table.style.opacity = "1"
    })

    done.addEventListener("click", function () {
        if(s_no.value != "" && s_no.value > 0 && s_no.value < 10000){
        parent_of_td_2.childNodes[1].innerText = s_no.value;
        parent_of_td_2.childNodes[7].innerText = age.value;
        parent_of_td_2.childNodes[9].innerText = Class.value;
        }
        parent_of_td_2.childNodes[3].innerText = first_name.value;
        parent_of_td_2.childNodes[5].innerText = last_name.value;
       
        hidden_table.style.display = "none"
        table.style.opacity = "1"
    })
}
