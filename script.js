const header = document.querySelector('header');
window.addEventListener('scroll', function(){
header.classList.toggle('sticky', window.scrollY > 130);
});

let menu=document.querySelector('#menu-icon');
let menuList=document.querySelector('.menulist');

menu.onclick = () => {
    menuList.classList.toggle('open');
    menu.classList.toggle('bx-x');
}