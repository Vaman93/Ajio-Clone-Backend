userid();

async function userid() {
  try {
    let userdata = await fetch("https://ajio-clone-full.herokuapp.com/user/cooke");
    let usermon = await userdata.json();
    getAllAmount(usermon._id);
  } catch (e) {
    console.log(e.message);
  }
}

async function getAllAmount(id) {
  try {
    const billdata = await fetch(
      `https://ajio-clone-full.herokuapp.com/payment/payment/bill/${id}`
    );

    const billamount = await billdata.json();

    paymentfuction(billamount.bill);
  } catch (e) {
    console.log(e.message);
  }
}

function paymentfuction(biils) {
  let amount = +biils[0];

  let bg = +biils[1];

  let tag = amount - bg;

  document.getElementById("payvalue").value = `PAY ₹${tag} SECURELY`;

  let Bag_total = document.getElementById("Bag-total");
  Bag_total.innerText = `Rs. ${amount}.00`;

  let Bag_discount = document.getElementById("Bag-discount");
  Bag_discount.innerText = `Rs. ${bg}.00`;

  let amount2 = document.querySelector(".amount2");
  amount2.innerHTML = `Rs. ${tag}.00`;
}

document.getElementById("form").addEventListener("submit", paymentsucees);

function paymentsucees(e) {
  e.preventDefault();
  paymentDone();
}

async function paymentDone() {
  try {
    let userdata = await fetch("https://ajio-clone-full.herokuapp.com/user/cooke");
    let usermon = await userdata.json();
    paymentDonegobackhome(usermon);
  } catch (e) {
    console.log(e.message);
  }
}

async function paymentDonegobackhome({ _id }) {
  try {

    const payeentapi = await fetch(`https://ajio-clone-full.herokuapp.com/payment/deletbillandcheckout/${_id}`)  

    const paymentdone = await payeentapi.json()

    if(paymentdone.error === false) {
      alert("your order was successfully placed");
       window.location.href = "/"
    }

  } catch (e) {
    console.log(e.message);
  }


}
