data=[{
    
        brand:"TOMMY HILFIGER",
        type:"Cotton V-neck T-shirt",
        img:"./women jeans/jeans.jpg",
        price:927,
        op:1599,
        discount:"(42% off)",
        bbs:"BBS Price 800",
     },
     {
        brand:"TOMMY HILFIGER",
        type:"Round-Neck T-shirt with Full Sleeves",
        img:"./women jeans/jeans.jpg",
        price:1097,
        op:1799,
        discount:"(39% off)",
        bbs:"BBS Price 989",
     },
]

var body=document.querySelector("body");


function display(){

data.forEach(function(el){

let maindiv=document.createElement("div");
maindiv.setAttribute("id","maindiv")
       
let div=document.createElement("div");
div.setAttribute("id","div1");

let img =document.createElement("img");
img.src=el.img;


let div1=document.createElement("div");
div1.textContent=el.type;
div1.setAttribute("id","div2");

let div2=document.createElement("div");
div2.innerHTML=`<span>size</span> <span id="span2" onclick="spandisplay()">Qty</span>`;
div2.setAttribute("id","div3");

div.append(img);
maindiv.append(div,div1,div2);
body.append(maindiv);
    });
}
display();


function spandisplay(){
    
    let div=document.createElement("div");
    



}