let nameValue = localStorage.getItem('name')
let emailStorage = localStorage.getItem('email')
let passwordStorage = localStorage.getItem('password')
let list = document.querySelector('.list')
let API_PRODUCTS = 'https://api.escuelajs.co/api/v1/products'

document.addEventListener('DOMContentLoaded',()=>{
    if(!nameValue){
        window.location.href = 'http://127.0.0.1:5500/index.html'
    }
})

fetch(API_PRODUCTS).then((data)=>{
    return data.json()
})
.then((data2)=>{
    
    data2.forEach(item => {
        let li = `<li class="item">
        <img class="img" src="${item.images[1]}" alt="">
        <h2>${item.title}</h2>
        <p class="desc">${item.description}</p>
        <h4 class="price">${item.price} $</h4>
        </li>`
        
        list.insertAdjacentHTML('beforeend',li)
    });
})
.catch(err=>{
    console.log(err);
})