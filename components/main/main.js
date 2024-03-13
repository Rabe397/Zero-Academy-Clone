//show-nav-lists
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
//drop-down-on-the-nav-items
const navItems = document.querySelectorAll(".nav-item-drop");
const dropMenus = document.querySelectorAll(".drop");

navItems.forEach((navItem,index)=>{
    navItem.addEventListener("click",()=>{
        dropMenus[index].style.display = "flex";
    })
})

document.addEventListener("click",(e)=>{
    navItems.forEach((navItem,index)=>{
        if(!navItem.contains(e.target)){
            dropMenus[index].style.display = "none"; 
         }
    })
})