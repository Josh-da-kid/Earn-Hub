let info = document.getElementById('info')
let msg = document.getElementById('msg')
let resetButton = document.getElementById('rp-btn')
info.addEventListener('dblclick', function() {
    msg.textContent = "It happens to the best of us! Just input the email address you used in signing up to the account to wish to retrieve and follow the simplesteps to reset your password."
})

info.addEventListener('click', function() {
    msg.textContent = ""


})

resetButton.addEventListener("click", function() {
    msg.textContent = ""
})
