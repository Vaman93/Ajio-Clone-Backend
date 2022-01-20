


$('.responsive').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  });
  

  


let bagbutton = document.getElementById("addtobagnewata")

bagbutton.addEventListener("click", () => {
    addtobagfunction(localstorgeitem.data1)
})


let product_arr_p = JSON.parse(localStorage.getItem("All_product_deletes")) || []

function addtobagfunction({bbs,brand,discount,imgsrc,op,price,type}) {

    let product_data = {
       
        bbs,
        brand,
        discount,
        imgsrc,
        op,
        price,
        type
    }
    
    product_arr_p.push(product_data)

    localStorage.setItem('All_product_deletes' , JSON.stringify( product_arr_p))

    window.location.href = "";

}



let savetoclotes = document.getElementById("savetoclotes")

let product_arr_closter = JSON.parse(localStorage.getItem("All_product_closte")) || []

savetoclotes.addEventListener("click", ()=>{
    savetoclotesfunction(localstorgeitem.data1)
})

 function savetoclotesfunction({bbs,brand,discount,imgsrc,op,price,type}) {

    let product_cloter = {
       
        bbs,
        brand,
        discount,
        imgsrc,
        op,
        price,
        type
    }
    
    product_arr_closter.push(product_cloter)

    localStorage.setItem('All_product_closte' , JSON.stringify(product_arr_closter))

    window.location.href = "";

 }








let returnsugggetion = document.querySelector(".show_the_dale")

let ret = document.querySelector(".return_text > p")

    ret.addEventListener("click", ()=>{
        showtheRetuernText()
    })

let OUR_PROMISE = document.querySelector(".OUR_PROMISE > p")
    OUR_PROMISE.addEventListener("click", showtheOUR_PROMISE)

function  showtheRetuernText() {
    returnsugggetion.innerHTML = `<p>Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please <a href="">click here.</a> </p>`
    ret.style.border="thin solid #ddd"
    OUR_PROMISE.style.border= "none"
}
function showtheOUR_PROMISE(){
    returnsugggetion.innerHTML =`We assure the authenticity and quality of our products
    `
    OUR_PROMISE.style.border="thin solid #ddd";
    ret.style.border= "none"
}



