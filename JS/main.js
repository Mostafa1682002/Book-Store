// //Header Section
let navbar=document.querySelector("nav");
let menu=document.getElementById("menu");
menu.onclick=()=>{
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
}
window.onscroll=function(){
  menu.classList.remove("fa-times")
    navbar.classList.remove("active");
}


  let year=document.querySelector(".cridet .year");
  year.innerHTML=new Date().getFullYear();