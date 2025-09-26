let nav = document.querySelector("nav"); 

function showMenu() {
    nav.classList.add("show"); 
}

function hideMenu() {
    nav.classList.remove("show"); 
}
const contactbtn = document.getElementById("contact-btn");
contactbtn.addEventListener("click", function(){
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    })
}) 