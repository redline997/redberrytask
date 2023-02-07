function validation() {
    var form = document.getElementById("private");
    var email = document.getElementById("email1").value;
    var text = document.getElementById("text");
    var pattern = /^[A-Za-z0-9._%+-]+@redberry.g$/;

    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "ელ.ფოსტა ვალიდურია";
        text.style.color = "green";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid")
        text.innerHTML = "ელ.ფოსტა არავალიდურია";
        text.style.color = "red";
    }

    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

function validation2() {
    var form = document.getElementById("private");
    var name = document.getElementById("name1").value;
    var text = document.getElementById("text2");

    if (name <= 1) {
        form.classList.remove("valid");
        form.classList.add("invalid")
        text.innerHTML = "სახელი არავალიდურია";
        text.style.color = "red";
    }
    else {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "სახელი ვალიდურია";
        text.style.color = "green";
    }

    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

function validation3() {
    var form = document.getElementById("private");
    var phonenumber = document.getElementById("phonenumber1").value;
    var text = document.getElementById("text3");
    var pattern = /(9)\d{10}/;

    if (phonenumber.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "ნომერი ვალიდურია";
        text.style.color = "green";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid")
        text.innerHTML = "ნომერი არავალიდურია";
        text.style.color = "red";
    }

    if (phonenumber == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}


