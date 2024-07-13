
var form = document.getElementById("form");
var vedio = document.getElementById("elem-vedio");
var logindiv = document.getElementById("lgn-b")
var logindivAd = document.getElementById("lgn-a")
var registration = document.getElementById("rigistration");
document.addEventListener('DOMContentLoaded', (event) => {

    registration.addEventListener('click', function () {
        form.style.display = "flex"; // Make sure display is set to flex
        setTimeout(function () {
            form.classList.add("show"); // Add the show class after setting display
            vedio.classList.add("myclas")
        }, 100);
        form.classList.remove("show"); // Add the show class after setting display

        // Small delay to ensure the display change takes effect
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way



        // You can handle form data here, send it via AJAX, etc.
    });
});
var cutbtn = document.getElementById("cut-btn");
cutbtn.addEventListener('click', function () {

    // Delay the removal of 'myclas' class to observe transition
    form.style.display = "none";
    setTimeout(function () {
        vedio.classList.remove("myclas");
    }, 20); // Adjust the delay (in milliseconds) as needed
});


function loginbtn() {
    logindiv.style.display = "flex";
    setTimeout(function () {
        logindiv.classList.add("show"); // Add the show class after setting display
        vedio.classList.add("myclas")
    }, 100);
    logindiv.classList.remove("show");
}

function loginbtnaA() {
    logindivAd.style.display = "flex";
    setTimeout(function () {
        logindivAd.classList.add("show"); // Add the show class after setting display
        vedio.classList.add("myclas")
    }, 100);
    logindivAd.classList.remove("show");
}


function cuttiing() {
    logindiv.style.display = "none";
    vedio.classList.remove("myclas")
}

function cuttiingAd() {
    logindivAd.style.display = "none";
    vedio.classList.remove("myclas")



}
var submit = document.getElementById("submit-btn");

submit.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    var fulname = document.getElementById("fullname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var birthdate = document.getElementById("date");
    var gender = document.getElementById("gender");

    if (!fulname.value || !email.value || !password.value || !birthdate.value || !gender.value) {
        console.error("One or more form fields are empty. User data not saved.");
        return;
    }

    var user = {
        name: fulname.value,
        email: email.value,
        password: password.value,
        birthdate: birthdate.value,
        gender: gender.value
    };

    var users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Hide the submit button
form.style.display="none"
    // Clear all input fields
    fulname.value = '';
    email.value = '';
    password.value = '';
    birthdate.value = '';
    gender.value = '';

    console.log("User data saved:", user);
});
