let list=document.querySelectorAll('li');
let s = "";
list.forEach(element=>{
    element.addEventListener('click',
    (e)=>{
        s = e.target.innerHTML;
        console.log(s);
        RemoveActiveClass();
        element.classList.toggle('color-li')
    })
})

function RemoveActiveClass() {
    list.forEach(element=>{
        element.classList.remove('color-li')
    })
}

let base = s;
let rate = 
fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB').then(res=>res.json()).then(data=>console.log(data))