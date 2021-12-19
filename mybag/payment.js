

let biils = JSON.parse(localStorage.getItem("bills"))



let amount = biils[0].amount


let bg = biils[0].bg


let tag = biils[0].ta


 document.getElementById('form').addEventListener("submit", paymentsucees)

 document.getElementById("payvalue").value = `PAY ₹${tag} SECURELY`

function paymentsucees(e) {
    e.preventDefault()
   alert("your order was successfully placed")
   window.location.href = "../Home/index.html"
}


let Bag_total = document.getElementById("Bag-total")
    Bag_total.innerText = `Rs. ${amount}.00`

let Bag_discount = document.getElementById("Bag-discount")
    Bag_discount.innerText = `Rs. ${bg}.00`


let amount2 = document.querySelector(".amount2")    
    amount2.innerHTML = `Rs. ${tag}.00`


