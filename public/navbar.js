import {navbarCom , footershow} from "/components/navbar_footer.js"

let mainnavbar = document.getElementById("Nav_bar_main")
    mainnavbar.innerHTML = navbarCom()

let footershowinhtml = document.querySelector("footer")
    footershowinhtml.innerHTML = footershow()

    let emptyprodut = document.getElementById("emptry_bag")

    let hidebag = document.querySelectorAll(".hidebag")


async function  addtobagApi(userid){
  if(userid.error === true){
      emptyprodut.style.display = "block"
      hidebag[0].style.display = "none"
      hidebag[2].style.display = "none"
      hidebag[3].style.display = "none"
      hidebag[1].style.display = "none"
  } else {
  try{

    const p = await fetch(`http://localhost:2222/usercheck/product/${userid._id}`)

    const product_arr = await p.json()

    if(product_arr.length === 0){
      emptyprodut.style.display = "block"
      hidebag[0].style.display = "none"
      hidebag[2].style.display = "none"
      hidebag[3].style.display = "none"
      hidebag[1].style.display = "none"
  }

    let bag_div_li = document.querySelector(".showthe_all_produtTo_bag")

    let totalofprodut = document.getElementById("total")

    let findtotal = product_arr.reduce(function (a,b){
        
          return  a + b.price
    }, 0)

    totalofprodut.innerText =`₹${findtotal}`
    show_the_produt_in_bag(product_arr)


    function show_the_produt_in_bag(d){
        bag_div_li.innerHTML = "";
      d.forEach(({discount,imgsrc,op,price,type})=>{
        let bag_product_div_each = document.createElement("div")
            bag_product_div_each.setAttribute("class" , "bag_product_div_each")
            bag_product_div_each.innerHTML = `
            <div class="bag_product_img">
                  <img src="${imgsrc}" alt="">
                </div>
                <div class="bag_produt_info">
                <div class="bag_product_pirces">
                    <p>Rs. ${price}</p> 
                </div>
                <div class="bag_demo_pisez">
                    <span>${op}</span> <span>${discount}</span>
                </div>
                <div class="bag_product_name">
                    <p>${type}</p>
                </div>
            </div>`  
            bag_div_li.append(bag_product_div_each)  
      })  
    }
  }catch(err){console.log("err")
}
}}






 


// Navbar Js 
let hidethenavbar = document.querySelector("#inpu")


let showthesuggestion = document.querySelector(".input_suggestion_div")

document.querySelector("body").addEventListener("wheel", hidediv)

hidethenavbar.addEventListener("click", hide)

function hide() {
  showthesuggestion.style.display = "block"
}
    

function hidediv(){
    showthesuggestion.style.display = "none"
  }


userdatalogin()

async function userdatalogin (){
    try{
      let userdata = await fetch("http://localhost:2222/user/cooke")
      let usermon = await userdata.json();
      userlogingornot(usermon)
      closeia(usermon)
      addtobagApi(usermon)
    }
    catch(e){
      console.log(e.message);
    }
  }
  


  let change_user = document.getElementById("user_name")

function userlogingornot(userm) {
    const username = userm.name
if(username === undefined){
  change_user.innerHTML = "Sign In / Join AJIO"
  logOut.style.display = "none"
} else{
  change_user.innerHTML = `Hi ${username}`
}

}


let logOut = document.querySelector(".Log_out")

logOut.addEventListener("click",async ()=>{
  try{
    let userdata = await fetch("http://localhost:2222/user/logout")
    let usermon = await userdata.json();
    userlogingornot(usermon)
  }
  catch(e){
    console.log(e.message);
  }
})




let closerdiv = document.querySelector(".showthehangerdiv")

let icon_hanger = document.querySelector(".icon_hanger")

function closeia(usernameclo){

if(usernameclo.name !== undefined){
  closerdiv.style.display = "none"
  icon_hanger.addEventListener("click", ()=>{
    window.location.href = "/Closet/index.html"
  })
}
}



let bag_page_fu = document.getElementById("bag_page_fu")
    bag_page_fu.addEventListener("click", ()=>{
        window.location.href= "/mybag/cart1.html"
    })