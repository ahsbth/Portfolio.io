const type=new Typed(".multi-text",{
    strings:["Programmer","Developer","Designer"],
    typeSpeed:70,
    backSpeed:70,
    backDealy:1000,
    loop:true,
});
ScrollReveal({
    distance:"80px",
    duration:2000,
    dealay:200,
});
ScrollReveal().reveal('.home-content,heading',{origin:'top'})

// responsive
let icon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

icon.onclick=()=>{
    icon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}