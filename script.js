// nav

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

// ini buat faq

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// register

const form_register = document.getElementById("form_register")

if (form_register) {
    form_register.addEventListener("submit", (e)=>{
        e.preventDefault()
        const fullname = document.getElementById("fullname")
        const username = document.getElementById("username")
        const dob = document.getElementById("dob")
        const gender = document.getElementsByName("gender")
        const email = document.getElementById("email")
        const password = document.getElementById("password")
        const confirm = document.getElementById("confirm")
        const agree = document.getElementById("agree")
        const error = document.getElementById("error")
        
        // buat error msggg
        let msg = []

        // validasi name
        if (fullname.value == "") {
            msg.push("Name must not be empty")
        } 

        // validasi username
        if (username.value == "") {
            msg.push("Username must not be empty")
        } 
        
        // validasi date of birth
        let date = new Date() 
        let currentYear = date.getFullYear()
        let dobDate = new Date(dob.value) 
        let dobYear = dobDate.getFullYear()
        if (dob.value == "" || dobYear >= currentYear) {
            msg.push("Year of birth must not be more or equals to this year")
        }

        // validasi gender
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked == true) {
                break
            }
            if (i == gender.length - 1) {
                msg.push("Gender should be chosen")
            }
        }

        // validasi email
        if (email.value == "" || email.value.indexOf("@") == 0) {
            msg.push("E-mail format should be correct")
        }

        // validasi password
        if (password.value == "" || password.value.length < 8) {
            msg.push("Password must be at least 8 characters")
        }

        // confirm password
        if (confirm.value == "" || confirm.value != password.value) {
            msg.push("Passwords do not match")
        } 

        // checkbox
        if (!agree.checked) {
            msg.push("You must agree to the Terms of Agreement");
        }

        // masukin ke array tadiiii
        error.innerText = msg.join("\n")

        if (msg.length == 0) {
            error.style.color = "green"
            error.innerText = "Registration successful!"
            form_register.reset()
            // ini buat ke homepage hehehehehe
            setTimeout(() => { window.location.href = "index.html" }, 1500)
        }
    })
}

