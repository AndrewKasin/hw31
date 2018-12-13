const div = document.querySelector('.hi');
const forma = document.querySelector('form');
const body = document.body;
const button = forma.querySelector('button');
const inputN = forma.querySelector('.name');
const inputPass = forma.querySelector('.password');

firstChekCookie();

forma.addEventListener('submit', event => {
    event.preventDefault();
    if (event.target = button) {
        check();
    } 
});

function firstChekCookie(){
    if (document.cookie !=='') {

    if (getCookie('enter')=='true'){

        forma.classList.add('unvisible');
        div.classList.remove('unvisible');
        div.classList.add('visible');
}   
} else {
    let nameCookie = document.cookie='name=Mike';
    let passCookie = document.cookie='password=qwerty';
    let enterCookie = document.cookie='enter=false';
}
};

function check(){
    if (getCookie('name').length>0 && getCookie('password').length>0) {
        if (getCookie('name') !== inputN.value) {
            body.insertAdjacentHTML('afterbegin', `<div class = 'red'>Wrong name! 
            </div>`);
            setTimeout(()=>{
            body.firstElementChild.remove();   
            }, 2000 );
        } else if (getCookie('password') !==inputPass.value) {
            body.insertAdjacentHTML('afterbegin', `<div class = 'red'>Wrong password! 
            </div>`);
            setTimeout(()=>{
            body.firstElementChild.remove();   
            }, 2000 );
        } else {
            forma.classList.add('unvisible');
            body.insertAdjacentHTML('afterbegin', `<div>Hello, ${inputN.value}! 
            You successfully entered at your account </div>`);
            setCookie();
        }    
    } else {
        body.insertAdjacentHTML('afterbegin', `<div class = 'red'>Please enter 
                </div>`);
                setTimeout(()=>{
                body.firstElementChild.remove();   
            }, 2000 );
    }
}

function getCookie(key) {
    const regExp = new RegExp(`${key}=(.+?)(?:;|$)`, 'i');
    const cookie = document.cookie;
    //console.log(cookie.match(regExp)[1]);
    return cookie.match(regExp)[1];
}
function setCookie() {
    let exp = new Date();
    exp.setMinutes(exp.getMinutes() + 1);
    nameCookie = document.cookie='name=mike;expires='+ exp.toUTCString();
    passCookie = document.cookie=`password=qwerty;expires=${exp.toUTCString()}`;    
    enterCookie = document.cookie=`enter=true;expires=${exp.toUTCString()}`;
    console.log(exp);
    console.log(nameCookie); 
    
}



