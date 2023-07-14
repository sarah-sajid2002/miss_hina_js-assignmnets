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
        document.write("<h1> first name: </h2>" +"<h3>" + first_name.value + "</h3>");
        document.write("<h1> last name: </h2>" +"<h3>" + last_name.value + "</h3>");
        document.write("<h1> student's id: </h2>" +"<h3>" + Id.value + "</h3>");
        document.write("<h1> DOB: </h2>" +"<h3>" + date_of_birth.value + "</h3>");
        document.write("<h1> phone: </h2>" +"<h3>" + phone.value + "</h3>");
        document.write("<h1> email: </h2>" +"<h3>" + email.value + "</h3>");
        document.write("<h1> street address: </h2>" +"<h3>" + address_1.value + "</h3>");
        document.write("<h1> street address line 2: </h2>" +"<h3>" + address_2.value + "</h3>");
        document.write("<h1> city: </h2>" +"<h3>" + city.value + "</h3>");
        document.write("<h1> region: </h2>" +"<h3>" + region.value + "</h3>");
        document.write("<h1> postal zip code: </h2>" +"<h3>" + postal.value + "</h3>");

    })