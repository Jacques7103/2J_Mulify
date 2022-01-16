const login = document.getElementById("login")
const sign_up = document.getElementById("sign_up")
const modal_container_1 = document.getElementById("modal_container_1")
const modal_container_2 = document.getElementById("modal_container_2")
const modal_container_3 = document.getElementById("modal_container_3")
const close_1 = document.getElementById("close_1")
const close_2 = document.getElementById("close_2")
const close_3 = document.getElementById("close_3")
const sing_up_me = document.getElementById("sign_up_me")
const have_account = document.getElementById("have_account")

login.addEventListener("click", () => {
    modal_container_1.classList.add("show");
});

close_1.addEventListener("click", () => {
    modal_container_1.classList.remove("show");
});

sign_up.addEventListener("click", () => {
    modal_container_2.classList.add("show");
});

close_2.addEventListener("click", () => {
    modal_container_2.classList.remove("show");
});

have_account.addEventListener("click", () => {
    modal_container_2.classList.remove("show")
    modal_container_1.classList.add("show")
})

sing_up_me.addEventListener("click",() => {
    modal_container_2.classList.remove("show")
    modal_container_3.classList.add("show")
})

close_3.addEventListener("click", () => {
    modal_container_3.classList.remove("show")
})