ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('#hero h1, .about .content p, #hero h2,  #about .content h3, .section-title h2, #hero a', { origin: 'top' });
ScrollReveal().reveal('.about .icon-boxes .icon-box,  .services .icon-box, .social-media a', { origin: 'bottom' }); 


/*
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}) */



const form = document.querySelector("form");
const discordUsername = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Discord Username: ${discordUsername.value}<br> Email: ${email.value}<br> Message/Issue: ${mess.value}<br>`;

    Email.send({
        SecureToken : "4cb054c2-892c-4bba-a610-861e530c0e17",
    /*  Host : "smtp.elasticemail.com",
        Username : "cloudhubspt@gmail.com",
        Password : "EDB346197E48342EA8A7DD729EA0A885F1AF",  */
        To : 'cloudhubspt@gmail.com',
        From : "cloudhubspt@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Email sent succesfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
            item.parentElement.classList.remove("error");
            }
            else {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!discordUsername.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false
    }
});
