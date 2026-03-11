document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', () => {
        alert('Shaxsiy kabinetga xush kelibsiz!');
        loginBtn.innerText = "Chiqish";
        loginBtn.style.backgroundColor = "#e74c3c";
        loginBtn.style.color = "white";
    });
});