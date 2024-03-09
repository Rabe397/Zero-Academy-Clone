//drop-down-on-the-nav-items
const mobBar = document.querySelector(".mob i");
const nav = document.querySelector(".nav-lists");

const showNav = ()=>{
    
   nav.classList.toggle("active");
}

//change-navbar-background-color-when-scroll


document.addEventListener("scroll" , ()=>{
    const headerBar = document.querySelector(".header-bar");
    if( window.scrollY > 0 ){
        headerBar.style.backgroundColor = "rgb(49, 47, 47)";
    }else{
        headerBar.style.backgroundColor = "var(--main-color)";
    }
})