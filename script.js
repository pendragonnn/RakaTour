let nav = document.querySelector("nav");

let lastScrollTop = 0;
window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    nav.style.top="-80px";
  } else {
    nav.style.top="0px";
  }
  lastScrollTop = scrollTop;
  
});