// ==================question 2 ===================
let btn = document.getElementById("input");
let para = document.getElementById("para");
let fullPara = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate harum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias aliquam quo suscipit ea nam officia quis laborum. Nostrum, optio. Ab ullam quia esse maiores cum quasi exercitationem. Non, harum nisi?";
let smallPara = "Lorem ipsum doloing elit. Voluptate harum lorem"

btn.addEventListener("click" , function(){
    if(btn.value === "see more"){
        para.innerHTML = fullPara
        btn.value = "see less"
        btn.style.backgroundColor = "green"
        para.style.backgroundColor = "green"
    }
    else if(btn.value === "see less"){
        para.innerHTML = smallPara
        btn.value = "see more"
        btn.style.backgroundColor = "yellow"
        para.style.backgroundColor = "yellow"
    }
})
