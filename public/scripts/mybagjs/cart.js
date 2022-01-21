

let data = JSON.parse(localStorage.getItem("All_product_deletes")) 

var body=document.querySelector("body");


function display(){

data.forEach(function(el){

let maindiv=document.createElement("div");
maindiv.setAttribute("id","maindiv")
       
let div=document.createElement("div");
div.setAttribute("id","div1");

let img =document.createElement("img");
img.src=el.imgsrc;


let div1=document.createElement("div");
div1.textContent=el.type;
div1.setAttribute("id","div2");

let div2=document.createElement("div");
div2.innerHTML=`<span>size:-xl</span>    <span id="span">Qty-:1</span>`;
div2.setAttribute("id","div3");

let div3=document.createElement("div");
div3.setAttribute("id","div4");
div3.innerHTML=`
                <p id="p1"><span id="span1">Savings</span>:Rs.${el.op-el.price}</p>
               
                <div id="idiv"> 
                    <div id="idiv1"><span style="text-decoration:line-through">Rs.${el.op}.00</span>(${el.discount}%)</div>
                    <div id="idiv2">Rs.${el.price}.00</div>
                </div>`;

let div4=document.createElement("div");
div4.setAttribute("id","div5");
div4.innerHTML=`<div id="ldiv4">
                <div id="delete"><span style="margin-left:60px;">Delete<span></div>
                <div id="move"><span>Move to Closet</span></div>
                <div>`;

div.append(img);
div3.append(div4);
maindiv.append(div,div1,div2,div3);
body.append(maindiv);
    
});
}
display();

let sum=function(ac,el) //price sum
{
    return ac + el.price;
}
function ops(ac,el) //original price sum
{
    return ac +el.op
}

let receipt=[];

let originalprice= data.reduce((a, b)=>{
        return a + b.price
} , 0);

let bagdiscount=data.reduce(ops , 0) - data.reduce(sum , 0);
 

let totalamount = data.reduce(sum , 0);


let billdetails={
    amount:originalprice,
    bg:bagdiscount,
    ta:totalamount,
}
receipt.push(billdetails);      //bill details
localStorage.setItem("bills",JSON.stringify(receipt));

function bill(){

    data.forEach(function(el){
        
    let div=document.createElement("div");
    div.setAttribute("id","bdiv");

    let bdiv=document.createElement("div");
    bdiv.setAttribute("id","bdiv1");
    bdiv.textContent="What is Ajio wallet?";

    let bdiv1=document.createElement("div");
    bdiv1.setAttribute("id","bdiv2");
    bdiv1.innerHTML=`<div id="odiv1">Order Details</div>
                     <div id="odiv2">  Bag total   <span id="s1">Rs.${originalprice}.00</span>   </div>                     
                     <div id="odiv2">  Bag discount<span id="s2"> -Rs.${bagdiscount}.00</span></div>
                     <div id="odiv2">  Delivery    <span id="s3">Free</span>   </div> 
                     <div id="odiv3">  Total Amount<span id="s4" style="font-size:15px;"> Rs.${totalamount}.00</span></div>`;
    let bdiv2=document.createElement("div");
    bdiv2.setAttribute("id","bdiv3");
    bdiv2.textContent=`PROCEED TO SHIPPING`;
    bdiv2.addEventListener("click" , gotopagenextpage)
    div.append(bdiv,bdiv1,bdiv2);

    body.append(div);
    });
}
bill();


function gotopagenextpage(){
    window.location.href = "./address1.html"
}