const div = document.querySelector('div');
const forma = document.querySelector('form');
const button = forma.querySelector('button');
const input = forma.querySelector('input');

if (document.cookie.length > 0) {
    forma.classList.add('form-none');
    let userName = getCookie('user');
    div.insertAdjacentHTML('afterbegin', `<div>Hello, ${userName}</div>`);
};

forma.addEventListener('submit', event => {
    event.preventDefault();
    eSubmit = event.target;
    
    if (eSubmit = button) {
    forma.classList.add('form-none');    
    let valueofInput = input.value;
    document.cookie=`user=${valueofInput}`;
    div.insertAdjacentHTML('afterbegin', `<div>Hello, ${valueofInput}</div>`); 
}
});


function getCookie(key) {
    const regExp = new RegExp(`${key}=(.+?)(?:;|$)`, 'i');
    const cookie = document.cookie;
    //console.log(cookie.match(regExp)[1]);
    return cookie.match(regExp)[1];
}
