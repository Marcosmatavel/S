

window.addEventListener("scroll", function(){
    var header = document.querySelector(".header")

    header.classList.toggle('roll', window.scrollY >600)
})