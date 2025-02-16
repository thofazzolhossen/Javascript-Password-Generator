const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
    let characters = lowercaseLetters;
    if (uppercaseCheckbox.checked) characters += uppercaseLetters;
    if (numbersCheckbox.checked) characters += numbers;
    if (symbolsCheckbox.checked) characters += symbols;

    let password = "";
    for (let i = 0; i < lengthInput.value; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", () => {
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied!");
});

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

// Generate an initial password on load
generatePassword();
