// toggle-menu

let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".header-list");

toggleBtn.onclick=function(e){
    e.stopPropagation();
    this.classList.toggle("menu-active");
    tlinks.classList.toggle("open");
}

// click any where outside menu and toggle
document.addEventListener("click",(e => {
    if(e.target !== toggleBtn && e.target !== tlinks){
        if(tlinks.classList.contains("open")){
            toggleBtn.classList.toggle("menu-active");
            tlinks.classList.toggle("open");
        }
    }
}))

tlinks.onclick = function(e){
    e.stopPropagation();
}