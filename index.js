// Nav bar active handle

let btns = document.getElementsByClassName("btn");

for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
    
}


// Form Validation

function validate(form) {

    // These variables will be used to call APIs or store user data
    let firstName = form.fname.value.trim();
    let lastName = form.lname.value.trim();
    let email = form.mail.value.trim();
    let query = form.query.value.trim();


    // There will be a API call in near future
        
    if (query == '') {
        alert("Please enter some query");
        return false;
    }
    
    return true;
}