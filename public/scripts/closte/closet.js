userlogin()

async function userlogin (){
    try{
      let userdata = await fetch("http://localhost:2222/user/cooke")
      let usermon = await userdata.json();
      clostedata(usermon._id)
    }
    catch(e){
      console.log(e.message);
    }
}
  

async function clostedata(cloid){

    try{
        const closte = await fetch(`http://localhost:2222/closte/clsotepro/data/product/${cloid}`)

        const closteuserdata = await closte.json()

        showtheclost(closteuserdata)

    }catch(err){
        console.log(err.message);
    }

}

let slider_main = document.querySelector(".slider_main")

function showtheclost(d){

    d.forEach(({bbs,brand,discount,imgsrc,op,price,type})=> {

        let Slider_div = document.createElement("div");
            Slider_div.setAttribute("class", "Slider_div")

            Slider_div.innerHTML = ` <div class="product_sug_div_img">
             <img src="${imgsrc}" alt="">
             </div>
             <div class="brand_name_sug_s">
            <p>${brand}</p>
             </div>
         <div class="Name_of_prod_sug">
            <span>${type}</span>
         </div>
         <div class="product_price_sug">
         <span>Rs. ${price}</span> <span>Rs. ${op} <span id="line">(${discount}% off)</span>
         </div>
            <div class="BBS_product_price_sug">
                <p>${bbs}</p>
             </div>
         </div>
`

        slider_main.append(Slider_div)
    })

}