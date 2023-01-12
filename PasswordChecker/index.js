const passInput = document.getElementById("passInput");
const showBtn = document.getElementById("showBtn");
const text = document.getElementById("helperText");

const bar = document.getElementById("bar");

showBtn.addEventListener('click', () => {
    let btnText = showBtn.value;
    if (btnText === "SHOW") {
        passInput.type = "text";
        btnText = "HIDE";
    }
    else {
        passInput.type = "password";
        btnText = "SHOW";
    }

    showBtn.value = btnText;
});

passInput.addEventListener('input', () => {
    let passText = passInput.value;
    text.textContent = verifyText(passText);
})

function verifyText(passText) {

    if (passText === "") {
        text.style.visibility = "hidden";
        bar.className = "bar";
        return ".";
    }
    else {
        text.style.visibility = "visible";
    }

    var specialFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var upperFormat = /[A-Z]/;

    var special = specialFormat.test(passText);
    var upper = upperFormat.test(passText);
    var length = passText.length > 7 ? true : false;

    text.className = "text";
    bar.className = "bar";

    if (length && special && upper) {
        text.classList.add("text-strong");
        bar.classList.add("strong");
        return "Your password is strong";
    }
    else if ((length && special) || (special && upper) || (length && upper)) {
        text.classList.add("text-medium");
        bar.classList.add("medium");
        return "Your password is medium";
    }
    else {
        text.classList.add("text-weak");
        bar.classList.add("weak");
        return "Your password is weak";
    }
}