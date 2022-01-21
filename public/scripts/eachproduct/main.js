
$('.responsive').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  });


  


async function userdatalogin (){
    try{
      let userdata = await fetch("http://localhost:2222/user/cooke")
      let usermon = await userdata.json();

      return usermon

    }
    catch(e){
      console.log(e.message);
    }
  }

  

 async function productid (id){
      
   let userauth = await userdatalogin()
   
   if(userauth.error === true){
       alert('Please login first')
   } else{
       addtobag(userauth._id , id)
   }
  }


async function addtobag(userid, productid){
    productid = JSON.parse(productid)
    try{
        const addbagapi = await fetch(`http://localhost:2222/bagproduct/${userid}/${productid}`)

        const addbagdata = await addbagapi.json()

        if(addbagdata.message === "Success"){
            alert("Product is added successfully")
            window.location.reload()
        } 

    }catch(err){console.log("err")}
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



