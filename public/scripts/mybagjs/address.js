var data=JSON.parse(localStorage.getItem("bills"));

var billdiv=document.getElementById("billdiv");

function show(){

    data.forEach(function(el){
    let div1=document.createElement("div");
    div1.setAttribute("id","adiv1");

    let div2=document.createElement("div");
    div2.setAttribute("id","adiv2");
    div2.textContent=`What is AJIO Wallet?`;

    let div3=document.createElement("div");
    div3.setAttribute("id","adiv3");
    div3.innerHTML=`<div id="num1">Order Details</div>
                    <div id="num2">Bag Total<span id="amount">Rs.${el.amount}.00</span></div>
                    <div id="num2">Bag Discount<span id="bg">-Rs.${el.bg}.00</span></div>
                    <div id="num2">Delivery<span id="delivery">FREE</span></div>
                    <div id="num3">Total Amount<span id="ta">Rs.${el.ta}.00</span></div>`;
                    
    let div4=document.createElement("div");
    div4.setAttribute("id","adiv4");
    div4.innerHTML=`PROCEED TO PAYMENT`;
    div4.addEventListener("click", gotonextpage)
    div1.append(div2,div3,div4);
    billdiv.append(div1);
    
});
}
show();





let input_check = document.querySelectorAll(".input")

function gotonextpage(){
    let v = true;
    input_check.forEach((e)=>{
       if( e.value.length === 0 ) v = false;
       console.log('e:', e.value)
    })

    if(v === false){
        alert('Fill the all delaties')
    } else{
        window.location.href = "./payment.html"
    }
    
}