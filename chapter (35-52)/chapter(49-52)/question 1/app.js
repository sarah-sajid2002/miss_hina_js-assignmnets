// ===================question 1====================
    let first_name = document.getElementById("first_name");
    console.log(first_name.value);
    let last_name = document.getElementById("last_name")
    let Id = document.getElementById("Id")
    let date_of_birth = document.getElementById("date_of_birth")
    let phone = document.getElementById("phone")
    let email = document.getElementById("email")
    let address_1 = document.getElementById("address_1")
    let address_2 = document.getElementById("address_2")
    let city = document.getElementById("city")
    let region = document.getElementById("region")
    let postal = document.getElementById("postal")
    let btn = document.getElementById("btn");
 
    btn.addEventListener("click",function(){
        document.write("<h1> FORM DETAILS </h1>")
        document.write("<b> first name: </b>"+ first_name.value + "</br>");
        document.write("<b> last name: </b>"  + last_name.value + "</br>");
        document.write("<b> student's id: </b>"  + Id.value + "</br>");
        document.write("<b> DOB: </b>" +"<b>" + date_of_birth.value + "</b>");
        document.write("<b> phone: </b>" + phone.value + "</br>");
        document.write("<b> email: </b>" + email.value + "</br>");
        document.write("<b> street address: </b>" + address_1.value + "</br>");
        document.write("<b> street address line 2: </b>"  + address_2.value + "</br>");
        document.write("<b> city: </b>" + city.value + "</br>");
        document.write("<b> region: </b>" + region.value + "</br>");
        document.write("<b> postal zip code: </b>" + postal.value + "</br>");

    })