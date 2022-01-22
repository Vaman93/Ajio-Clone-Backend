
let deletid;

forcheckout()

async function forcheckout (){
    try{
      let userdata = await fetch("https://ajio-clone-full.herokuapp.com/user/cooke")
      let usermon = await userdata.json();
      apidata(usermon)
    }
    catch(e){
      console.log(e.message);
    }
  }


async function apidata(bid){
    // console.log(bid);
    try{
        const api =await fetch(`https://ajio-clone-full.herokuapp.com/usercheck/product/${bid._id}`);
        const dataapi=await api.json();
        display(dataapi , bid);
        productsum(dataapi,bid)

    }
    catch(err){
console.log(err.message);
    }
}


var body=document.getElementById("bodydemio");


function display(data , bid){


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

let ldiv4 = document.createElement("div");
    ldiv4.setAttribute("id","ldiv4")

    let deletediv = document.createElement("div")
        deletediv.setAttribute("id","delete")
        deletediv.innerHTML = `<span style="margin-left:60px;">Delete<span>`
        deletediv.addEventListener("click" , ()=>{
                 deletedproduct(el._id , bid._id)
             })
    let move = document.createElement("div")    
    move.setAttribute("id","move")
    move.innerHTML = `<span>Add to Closet<span>`
    ldiv4.append(deletediv, move)
    div4.append(ldiv4)   

div.append(img);
div3.append(div4);
maindiv.append(div,div1,div2,div3);
body.append(maindiv);
});

}

async function deletedproduct(elidpro , useridele){

    try{

        const productdelete = await fetch(`https://ajio-clone-full.herokuapp.com/usercheck/productdelete/${useridele}/${elidpro}` ,  { method: 'DELETE' })

        const delectproduct = await productdelete.json()
        
        window.location.reload()

    } catch(err){
        console.log(err.message)
    }

}


function productsum(data , bid){



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
receipt.push(billdetails); 

bill(bid,originalprice,bagdiscount,totalamount)
}    

 //bill details
// localStorage.setItem("bills",JSON.stringify(receipt));

function bill(bid,originalprice,bagdiscount,totalamount){
    
    // data.forEach(function(el){
        
    let div=document.createElement("div");
    div.setAttribute("id","bdiv");

    let bdiv=document.createElement("div");
    bdiv.setAttribute("id","bdiv1");
    bdiv.textContent="What is Ajio wallet?";

    let bdiv1=document.createElement("div");
    bdiv1.setAttribute("id","bdiv2");
    bdiv1.innerHTML=`<div id="odiv1">Order Details</div>
                     <div id="odiv2">  Bag total   <span id="s1">Rs.${originalprice}.00</span>   </div>                     
    <div id="odiv2" >  Bag discount<span id="s2" style="text-decoration: line-through;"> -Rs.${bagdiscount}.00</span></div>
                     <div id="odiv2">  Delivery    <span id="s3">Free</span>   </div> 
                     <div id="odiv3">  Total Amount<span id="s4" style="font-size:15px;"> Rs.${totalamount}.00</span></div>`;
    let bdiv2=document.createElement("div");
    bdiv2.setAttribute("id","bdiv3");
    bdiv2.textContent=`PROCEED TO SHIPPING`;
    bdiv2.addEventListener("click" , ()=>{
        gotopagenextpage(bid._id,originalprice,bagdiscount,totalamount)
    })
    div.append(bdiv,bdiv1,bdiv2);

    body.append(div);
    // });
}
// bill();


async function gotopagenextpage(bid,o,b,t){
 try{
    const billapi = await fetch(`https://ajio-clone-full.herokuapp.com/payment/user/payment/bill/add/${bid}/${o}/${b}/${t}`)

    const billmessage = await billapi.json()
    
    if(billmessage.error === false) {
        window.location.href = "/payment/address"
    }

 }catch(e){console.log(e.message)}
}