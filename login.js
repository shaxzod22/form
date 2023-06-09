let btnSignUp = document.querySelector('.btn-sign-up')
let formLogin = document.querySelector('.form-login')
let emailStorage = localStorage.getItem('email')
let passwordStorage = localStorage.getItem('password')
let userEmail = document.querySelector('.user__email')
let userPassword = document.querySelector('.user__password')
let text = document.querySelector('.error')

btnSignUp.addEventListener('click', () => {
window.location.href = 'http://127.0.0.1:5500/index.html'
})

formLogin.addEventListener('submit', (e) => {
e.preventDefault()

if(userEmail.value == emailStorage && userPassword.value == passwordStorage){
    window.location.href = 'http://127.0.0.1:5500/home.html'
}else{
    text.textContent = 'Bunday ma`lumot topilmadi!!!'
}
})