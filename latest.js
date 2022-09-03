const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const button = document.getElementById('on');
const info = document.getElementById('info');
const pic = document.getElementById('on');
button.addEventListener('click',() => {
    if (info.style.top == '100%'){
        info.style.top = '0%';
        info.style.opacity = '0';
    }
    else{
        info.style.top = '100%' ;
        info.style.opacity = '1';
        // console.log('kambing')
    }
});

hamburger.addEventListener('click',() => {
    navUL.classList.toggle('show');
});
// var y = 'ikanayam';
// document.getElementById('demo').innerHTML = y;