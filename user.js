const login = document.getElementById("login")
const modal_container = document.getElementById("modal_container")
const close = document.getElementById("close")
const login_me = document.getElementById("login_me")

login.addEventListener("click", () => {
    modal_container.classList.add("show");
});

close.addEventListener("click", () => {
    modal_container.classList.remove("show");
});

login_me.addEventListener("click", () => {
    modal_container.classList.remove("show");
});