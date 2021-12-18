


$('.responsive').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  });
  

  

let localstorgeitem = JSON.parse(localStorage.getItem("clickeproduct")) 

let product_div = document.querySelector("#first_section_product_and_delites")

let showtheproduct = ({bbs,brand,discount,imgsrc,op,price,type}) =>{

    return ` <div class="Main_product_img">
    <div class="Product_img">
        <img src="${imgsrc}" alt="">
    </div>
    <div class="suggestion_return_dis">
        <div class="return_text">
            <p>RETURNS</p>
            <div class="show_the_dale">
                <p>Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please <a href="">click here.</a> </p>
            </div>
        </div>
        <div class="OUR_PROMISE">
            <p>OUR PROMISE</p>
        </div>
    </div>
</div>
<div class="all_product_delates">
    <div class="bran_name">
        <p>${brand}</p>
    </div>
    <div class="name_of_product">
        <p>${type}</p>
    </div>
    <div class="product_rs">
        <p>Rs.${price}</p>
    </div>
    <div class="product_dicount">
        <span>Rs. ${op}</span> <span> (${discount}% off)</span>
        <p>Price inclusive of all taxes</p>
    </div>

    <div class="Bss_price_dis">
        <div class="use_code_get">
            <p>Use code BOOM T&C</p>
           
        </div>
        <div class="bss_dis_pric_div" style="text-align:left">
            <p>${bbs}</p>
            <div class="Extra_Upto_Off">
                <p>Extra Upto 37% Off on ₹2490 and Above.Max Discount Rs.1500. <a href="">View All Products</a> </p>
            </div>
        </div>
    </div>
    <div class="pr_14">
        <a href="">+14 More</a>
    </div>

    <div class="Select_size_all">
        <p>Select size</p>
        <div class="all_size_but">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
        </div>
    </div>

    <div class="show_the_map">
        <i class="fas fa-map-marker-alt"></i>
        <div class="select_lotion">
            <p>Select your size to know your estimated delivery date.</p>
        </div>
    </div>

    <div class="add_to_bag">
        <button id="addtobagnewata">
            <i style="margin-right: 10px;" class="fas fa-shopping-bag"></i>
            ADD TO BAG
        </button>
        <p>HANDPICKED STYLES | ASSURED QUALITY</p>
    </div>

    <div class="Save_the_clostes">
        <button id="savetoclotes"> <i style="margin-right: 10px;" class="fas fa-tshirt"></i>  SAVE TO CLOSET</button>
    </div>

    <div class="Products_delails">
        <ul>Product Details
            <li class="lifirst">Regular Fit</li>
            <li>Machine wash</li>
            <li>Polyester</li>
            <li>Product Code: 461642086002</li>
        </ul>
    </div>

</div>`

}


product_div.innerHTML = showtheproduct(localstorgeitem.data1)



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



