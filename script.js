const wrapper= document.querySelector('.wrapper');
const loginlink= document.querySelector('.login-link');
const registerlink= document.querySelector('.register-link');
const btnpopup= document.querySelector('.btnlogin-popup');
const iconclose=document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})