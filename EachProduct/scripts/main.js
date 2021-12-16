data=[    
    {
    brand:"Puma",
    type:"Ws AOP Tee",
    imgsrc:"./mybag/women t-shirts/wtshirts.jpg",
    price:1000,
    op:1999,
    discount:"(50% off)",
    bbs:"BBS Price 750",
    },
    {
        brand:"LEVIS",
        type:"Crew-Neck T-shirt with Brand Print",
        imgsrc:"./mybag/women t-shirts/wtshirts1.jpg",
        price:635,
        op:1199,
        discount:"(47% off)",
        bbs:"BBS Price 576",
     },
]







let returnsugggetion = document.querySelector(".show_the_dale")

let ret = document.querySelector(".return_text > p")

    ret.addEventListener("click", ()=>{
        showtheRetuernText()
    })

let OUR_PROMISE = document.querySelector(".OUR_PROMISE > p")
    OUR_PROMISE.addEventListener("click", showtheOUR_PROMISE)

function  showtheRetuernText() {
    returnsugggetion.innerHTML = `<p>Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please <a href="">click here.</a> </p>`
    ret.style.border="thin solid black"
    OUR_PROMISE.style.border= "none"
}
function showtheOUR_PROMISE(){
    returnsugggetion.innerHTML =`We assure the authenticity and quality of our products
    `
    OUR_PROMISE.style.border="thin solid black";
    ret.style.border= "none"
}