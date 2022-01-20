


$('.responsive').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  });
  

  function productid (id){
      id = JSON.parse(id);
      console.log(id)
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



