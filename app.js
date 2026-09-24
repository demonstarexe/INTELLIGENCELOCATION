const enterBtn = document.getElementById("enterBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// PASSWORD SEMENTARA UNTUK TESTING
const ACCESS_PASSWORD = "123456";

function login() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Cek nama
    if (!username) {
        message.textContent = "IDENTITY REQUIRED";
        usernameInput.focus();
        return;
    }

    // Cek password
    if (!password) {
        message.textContent = "PASSWORD REQUIRED";
        passwordInput.focus();
        return;
    }

    // Validasi password
    if (password !== ACCESS_PASSWORD) {
        message.textContent = "ACCESS DENIED // INVALID PASSWORD";
        passwordInput.value = "";
        passwordInput.focus();
        return;
    }

    // Login berhasil
    message.style.color = "#55ff9a";
    message.textContent = "ACCESS GRANTED";

    console.log("User:", username);

    // Simpan nama sementara
    sessionStorage.setItem("username", username);

    // Tunggu sebentar lalu lanjut
    setTimeout(() => {
        window.location.href = "location.html";
    }, 800);
}


// Tombol ENTER
enterBtn.addEventListener("click", login);


// Bisa tekan Enter di keyboard
passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        login();
    }
});