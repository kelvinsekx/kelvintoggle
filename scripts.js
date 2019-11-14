
// function toogleThat(x){
// x.classList.toggle('change')
// }

let menuToggle = document.querySelector("#icon");
var activeElements = document.querySelectorAll(".non");
let magic = document.querySelector('.magic');
var toggledMenu = menuToggle.addEventListener("click", function(){
    // forEach is not supported in IE11
 // activeElements.forEach(function(e){
 //     e.classList.toggle("active");
 // });
   
         activeElements[0].classList.toggle("change");
         magic.classList.toggle("change")
   
})