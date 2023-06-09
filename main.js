let inputEmail = document.querySelector('.input__email')
let inputName = document.querySelector('.input__name')
let inputJob = document.querySelector('.input__job')
let inputSurname = document.querySelector('.input__surname')
let inputPassword = document.querySelector('.input__password')
let btnSignIn = document.querySelector('.btn-sign-in')
let elForm = document.querySelector('.form')
let API_CREATE = 'https://reqres.in/api/users'
let API_REGISTER = 'https://reqres.in/api/register'

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    fetch(API_CREATE, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body :JSON.stringify(
            {
                name: inputName.value,
                job: inputJob.value,
            }
        )
    })
    .then(data => {
      return data.json(); 
    })
    .then(dataJsoned => {
        if(dataJsoned.name){
            localStorage.setItem('name',inputName.value)
            localStorage.setItem('email',inputEmail.value)
            localStorage.setItem('password',inputPassword.value)
            window.location.href = 'http://127.0.0.1:5500/home.html'
        }else{
            alert('Ma`lumotlarni to`ldirishingiz shart!!!')
        }
    })
 
    .catch(err => {
        console.log(err);
    })
    })

    btnSignIn.addEventListener('click',()=>{
        window.location.href = 'http://127.0.0.1:5500/login.html'
    })

  
