const mobile_toggle = document.querySelector('.mobile_toggle');
const navBar = document.querySelector('.nav-bar');
mobile_toggle.addEventListener('click',function(){
    mobile_toggle.classList.toggle('active');
    navBar.classList.toggle('active');
})