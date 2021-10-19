
function validateEmail() {
    var email = document.getElementById("txtemail");
    var filter = /[a-zA-Z]+@[a-zA-Z]+.+[com|ca]/;
    if (filter.test(email.value)) {
        console.log('OK');
        document.getElementById("validation-text").innerHTML = "<span style='color: green'>Email is okay</span>";
    }
    else {
        console.log('NOT OK');
        document.getElementById("validation-text").innerHTML = "Please provide a valid email address";
        document.getElementsByClassName("round_button")[0].style.border = "1px solid #FF475A";
    }
}
  


  