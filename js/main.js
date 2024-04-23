

const header = document.querySelector("header");

window.onscroll = function(){
  if (window.scrollY > 100){
    header.classList.add("fixed-header")
  }else if(window.scrollY < 100) {
    header.classList.remove("fixed-header")
  }
}
