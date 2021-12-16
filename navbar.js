import {navbarCom , footershow} from "/components/navbar_footer.js"

let mainnavbar = document.getElementById("Nav_bar_main")
    mainnavbar.innerHTML = navbarCom()

let footershowinhtml = document.querySelector("footer")
    footershowinhtml.innerHTML = footershow()



 


// Navbar Js 
let hidethenavbar = document.querySelector(".input_serach_div_secon_nav")

let navbar = document.querySelector("#hovermain")

let showthesuggestion = document.querySelector(".input_suggestion_div")

document.querySelector("body").addEventListener("wheel", hidediv)

hidethenavbar.addEventListener("click", hide)

function hide() {
  showthesuggestion.style.display = "block"
}
    

function hidediv(){
    showthesuggestion.style.display = "none"
  }