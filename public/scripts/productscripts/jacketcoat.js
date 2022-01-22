

let datawhatsnew;
let data;
let count1;
dataherko();
dataherko1();

async function dataherko() {
  try {
    let datas = await fetch('https://ajio-clone-full.herokuapp.com/productApi/men/productjacket');
    let d = await datas.json();
   
    data = d
    count1 = data.length;
    displayProduct(data);
  } catch (err) { 
    console.log(err.message);
  }
}

async function dataherko1() {
  try {
    let datas = await fetch('https://ajio-clone-full.herokuapp.com/productApi/men/productjacket');
    let d = await datas.json();
   
    datawhatsnew = d;

  } catch (err) { 
    console.log(err.message);
  }
}

var scselect = document.getElementById("scselect");
var scjsgrid1 = document.getElementById("scjsgrid");

//apis for sorting

//sort by latest
async function latestapi(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/sort/${gender}/${type}/latest`);

    const dataapilatest= await underapi.json();
    
    return dataapilatest;
  }
  catch (err) {
    console.log(err.message);
  }
}


//sort by alphabetical
async function alphabeticalbybrandapi(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/sort/${gender}/${type}/alphabeticalbybrand`);

    const dataapialphabeticalbybrand= await underapi.json();
    
    return dataapialphabeticalbybrand;
  }
  catch (err) {
    console.log(err.message);
  }
}




//sort by discount

async function discountapi(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/sort/${gender}/${type}/discount`);

    const dataapidiscount = await underapi.json();
    
    return dataapidiscount ;
  }
  catch (err) {
    console.log(err.message);
  }
}




//sort by price high to low

async function pricehightolow(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/sort/${gender}/${type}/pricehightolow`);

    const dataapipricehightolow = await underapi.json();
    
    return dataapipricehightolow ;
  }
  catch (err) {
    console.log(err.message);
  }
}


//sort by price low to high

async function pricelowtohigh(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/sort/${gender}/${type}/pricelowtohigh`);

    const dataapipricelowtohigh = await underapi.json();
    
    return dataapipricelowtohigh ;
  }
  catch (err) {
    console.log(err.message);
  }
}


try {
  scselect.onchange = async  function ()  {
    //console.log("check");
     if (scselect.value === "Relevance") { 
      
    let datalatest =  await alphabeticalbybrandapi(data[0].gender, data[0].producttype);
        scjsgrid1.innerHTML ="";
        displayProduct(datalatest);
       // console.log("ggg")
    }
     else if (scselect.value === "Price(highest first)") {
       
      let datahighestfirst =  await pricehightolow(data[0].gender, data[0].producttype);
        scjsgrid1.innerHTML = "";
        displayProduct(datahighestfirst);
    }
     else if (scselect.value === "Price(lowest first)") {
       
      let datalowestfirst =  await pricelowtohigh(data[0].gender, data[0].producttype);
        // data.sort((a, b) => a.price - b.price);
        scjsgrid1.innerHTML = "";
        displayProduct(datalowestfirst);
    }
    else if (scselect.value === "Discount") {
      //  data.sort((a, b) => b.discount - a.discount);
       let datadiscountapi =  await discountapi(data[0].gender, data[0].producttype);
        scjsgrid1.innerHTML = "";
        displayProduct(datadiscountapi);
    }
    else if (scselect.value === "What's New") { 
        scjsgrid1.innerHTML = "";
        displayProduct(datawhatsnew);
    };

};
} catch (err) {
    console.log("errorfound:", err);
};

let grid3 = () => {
 // console.log("grid3 check")
  try {
    scjsgrid1.innerHTML = "";
    scjsgrid1.style.gridTemplateColumns = "auto auto auto";
   
    scselect.onchange = async  function ()  {
      //console.log("check");
       if (scselect.value === "Relevance") { 
        
      let datalatest =  await alphabeticalbybrandapi(data[0].gender, data[0].producttype);
          scjsgrid1.innerHTML ="";
          displayProduct(datalatest);
         // console.log("ggg")
      }
       else if (scselect.value === "Price(highest first)") {
         
        let datahighestfirst =  await pricehightolow(data[0].gender, data[0].producttype);
          scjsgrid1.innerHTML = "";
          displayProduct(datahighestfirst);
      }
       else if (scselect.value === "Price(lowest first)") {
         
        let datalowestfirst =  await pricelowtohigh(data[0].gender, data[0].producttype);
          // data.sort((a, b) => a.price - b.price);
          scjsgrid1.innerHTML = "";
          displayProduct(datalowestfirst);
      }
      else if (scselect.value === "Discount") {
        //  data.sort((a, b) => b.discount - a.discount);
         let datadiscountapi =  await discountapi(data[0].gender, data[0].producttype);
          scjsgrid1.innerHTML = "";
          displayProduct(datadiscountapi);
      }
      else if (scselect.value === "What's New") { 
          scjsgrid1.innerHTML = "";
          displayProduct(datawhatsnew);
      };

  };
    } catch (err) {
        console.log("errorfound:", err);
    };
    

    displayProduct(data);

}

let grid5 = () => {
   // console.log("grid5 check")
    scjsgrid1.innerHTML = "";
    scjsgrid1.style.display = "grid";
    scjsgrid1.style.gridTemplateColumns = "auto auto auto auto auto";
    scjsgrid1.style.gridGap = "12px";
    
    function displayProduct (data) {
    
let count12 = document.getElementById("count1");
count12.innerText = count1 + "  Items Found";
        data.forEach((data1) => {
    
            let div1 = document.createElement("div");
            
            let mainDiv = document.createElement("div");
    
            var img1 = document.createElement("img");
            img1.setAttribute("id", "img1grid5");
            img1.src = data1.imgsrc;
            img1.style.width = "174px";
            
            let quickView = document.createElement("div");
            quickView.setAttribute("id", "scquickView");
            quickView.innerText = "QUICKVIEW";
            
            let imgandquick = document.createElement("div");
            imgandquick.append(img1, quickView);
    
            let brand = document.createElement("div");
            brand.innerText = data1.brand;
            brand.style.color = "#b19975";
            brand.style.fontWeight = "600";
            brand.style.fontSize= "13px";
    
            let type = document.createElement("div");
            type.innerText = data1.type;
            type.style.fontSize = "12px";
            type.style.overflow = "hidden";
    
            let divmid = document.createElement("div");
    
    
            let price = document.createElement("span");
            price.innerText = "Rs. " + data1.price +"  ";
            price.style.fontSize = "12px"
            price.style.fontWeight = "bold";
            price.style.marginRight = "5px";
            let op = document.createElement("span");
            op.innerText = "Rs. " + data1.op;
            op.style.textDecoration = "line-through";
            op.style.fontSize = "12px";
            op.style.marginRight = "5px";
    
            let discount = document.createElement("span");
            discount.innerText ="(" + data1.discount + "% off)";
            discount.style.color = "#b19975";
            discount.style.fontSize = "12px";
    
            divmid.append(price, op, discount);
            divmid.style.display = "flex";
            divmid.style.justifyContent="center"
    
    
            var bbsmain = document.createElement("div");
            bbsmain.setAttribute("id","grid5bbsmain")
            bbsmain.style.display = "flex";
            bbsmain.style.justifyContent = "center";
            bbsmain.style.backgroundColor = "#E8F8FF";
            bbsmain.style.width = "174px";
            bbsmain.style.padding = "2.5px 4px"
    
            let img2 = document.createElement("img");
            img2.src = "/Images/prodimg/pricelogo.svg";
            img2.style.width = "15px";
            img2.style.height = "9px";
            img2.style.marginTop = "5px";
    
            let bbsdiv = document.createElement("div");
            bbsdiv.innerText = data1.bbs;
            bbsdiv.style.fontSize = "11px"
            bbsdiv.style.fontWeight = "bold";

            bbsmain.style.width = "174px";
           
            bbsmain.append(img2, bbsdiv);
           
    
    
            div1.append(brand, type, divmid, bbsmain);
            div1.style.textAlign = "center";
    
            mainDiv.append(imgandquick, div1);
            let dataid = data1._id
            mainDiv.onclick = () =>{
              showSingleProd(dataid);
            }
    
            const hoveringfunc = () => {
                quickView.style.display = "block";
            }
            const hoveringfunc1 = () => {
                quickView.style.display = "none";
            }
            mainDiv.addEventListener("mouseenter", hoveringfunc);
            
            mainDiv.addEventListener("mouseleave",hoveringfunc1);
    
            scjsgrid1.append(mainDiv);
          
        });
    }
    
    displayProduct(data);
    try {
      scselect.onchange = async  function ()  {
        //console.log("check");
         if (scselect.value === "Relevance") { 
          
        let datalatest =  await alphabeticalbybrandapi(data[0].gender, data[0].producttype);
            scjsgrid1.innerHTML ="";
            displayProduct(datalatest);
           // console.log("ggg")
        }
         else if (scselect.value === "Price(highest first)") {
           
          let datahighestfirst =  await pricehightolow(data[0].gender, data[0].producttype);
            scjsgrid1.innerHTML = "";
            displayProduct(datahighestfirst);
        }
         else if (scselect.value === "Price(lowest first)") {
           
          let datalowestfirst =  await pricelowtohigh(data[0].gender, data[0].producttype);
            // data.sort((a, b) => a.price - b.price);
            scjsgrid1.innerHTML = "";
            displayProduct(datalowestfirst);
        }
        else if (scselect.value === "Discount") {
          //  data.sort((a, b) => b.discount - a.discount);
           let datadiscountapi =  await discountapi(data[0].gender, data[0].producttype);
            scjsgrid1.innerHTML = "";
            displayProduct(datadiscountapi);
        }
        else if (scselect.value === "What's New") { 
            scjsgrid1.innerHTML = "";
            displayProduct(datawhatsnew);
        };

    };
    } catch (err) {
        console.log("errorfound:", err);
    };

}
//main working grid  5 over
function displayProduct (data) {
       
let count12 = document.getElementById("count1");
count12.innerText = count1 + "  Items Found";
    data.forEach((data1) => {

        let div1 = document.createElement("div");
        
        let mainDiv = document.createElement("div");

        var img1 = document.createElement("img");
        img1.setAttribute("id", "img1grid5");
        img1.src = data1.imgsrc;
        img1.style.width = "303px"
        
        let quickView = document.createElement("div");
        quickView.setAttribute("id", "scquickView");
        quickView.innerText = "QUICKVIEW";
        
        let imgandquick = document.createElement("div");
        imgandquick.append(img1, quickView);

        let brand = document.createElement("div");
        brand.innerText = data1.brand;
        brand.style.color = "#b19975";
        brand.style.fontWeight = "600";
        brand.style.fontSize= "13px";

        let type = document.createElement("div");
        type.innerText = data1.type;
        type.style.fontSize = "13px";
        type.style.overflow = "hidden";

        let divmid = document.createElement("div");


        let price = document.createElement("span");
        price.innerText = "Rs. " + data1.price +"  ";
        price.style.fontSize = "14px"
        price.style.fontWeight = "bold";
        price.style.marginRight = "5px";
        let op = document.createElement("span");
        op.innerText = "Rs. " + data1.op;
        op.style.textDecoration = "line-through";
        op.style.fontSize = "14px";
        op.style.marginRight = "5px";

        let discount = document.createElement("span");
        discount.innerText ="(" + data1.discount + "% off)";
        discount.style.color = "#b19975";
        discount.style.fontSize = "14px";

        divmid.append(price, op, discount);
        divmid.style.display = "flex";
        divmid.style.justifyContent="center"


        var bbsmain = document.createElement("div");
        bbsmain.setAttribute("id","grid5bbsmain")
        bbsmain.style.display = "flex";
        bbsmain.style.justifyContent = "center";
        bbsmain.style.backgroundColor = "#E8F8FF";
        bbsmain.style.width = "303px";
        bbsmain.style.padding = "2.5px 4px"

        let img2 = document.createElement("img");
      img2.src = "/Images/prodimg/pricelogo.svg";
        img2.style.width = "17px";
        img2.style.height = "12px";
        img2.style.marginTop = "5px";
        
        let bbsdiv = document.createElement("div");
        bbsdiv.innerText = data1.bbs;
        bbsdiv.style.fontSize = "13px"
        bbsdiv.style.fontWeight = "bold";
       
        bbsmain.style.width = "303px";

        bbsmain.append(img2, bbsdiv);
       


        div1.append(brand, type, divmid, bbsmain);
        div1.style.textAlign = "center";

        mainDiv.style.width = "303px";
        mainDiv.append(imgandquick, div1);
        let dataid = data1._id
        mainDiv.onclick = () =>{
            showSingleProd(dataid);
        }
        const hoveringfunc = () => {
            quickView.style.display = "block";
        }
        const hoveringfunc1 = () => {
            quickView.style.display = "none";
        }
        mainDiv.addEventListener("mouseenter", hoveringfunc);
        
        mainDiv.addEventListener("mouseleave",hoveringfunc1);
        scjsgrid1.style.gridTemplateColumns = "auto auto auto";
        scjsgrid1.append(mainDiv);

    });
}



   // refine by functionality

       var screfineid = document.getElementById("screfineid");
       var screfinelistmain1 = document.getElementById("screfinelistmain1");
       var count = 0;
  
   
var refine = () => {
    
    //console.log("refine");
    var div = document.createElement("div");

    div.innerHTML = `<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Gender</div>
</div>
<div id="scgendercat">

<input type="checkbox" name="Men" checked  id="">
<label for="">Men(40)</label>
</div>
<!-- gender finish -->
<div class="screfineline"></div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Category</div>
</div>
<div id="sccatcat">

    <input type="checkbox" name="Jackets&Coats" checked  id="">
    <label for="">Jackets&Coats(20)</label>
    </div>
    <!-- category finish -->
<div class="screfineline"></div>



<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Price</div>
</div>
<div id="scpricecat">

  

    <div>
    <input type="checkbox" name="Price501"onclick="under1000(data)" id="under1000">
    <label for="">Rs.0-1000</label>
    </div>

    <div>
    <input type="checkbox" name="Price1001"  onclick="under1000to1500(data)" id="">
    <label for="">Rs.1001-1500</label>
    </div>

    <div>
    <input type="checkbox" name="Price1501"  onclick="under1500to2000(data)" id="">
    <label for="">Rs.1501-2000</label>
    </div>

    <div>
    <input type="checkbox" name="Price2001" onclick="under2000above(data)" id="">
    <label for="">Rs.2000&above</label>
    </div>

    </div>
    <!-- price finish -->
<div class="screfineline"></div>



<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Brands</div>
</div>
<div id="scbrandcat">

    <div>
    <input type="checkbox" name="JOHN PLAYERS"  onclick="john(data)"  id="">
    <label for="">JOHN PLAYERS</label>
    </div>

    <div>
    <input type="checkbox" name="Campus Sutra"    onclick="campus(data)" id="">
    <label for="">Campus Sutra</label>
    </div>

    <div>
    <input type="checkbox" name="U.S.Polo Assn."   onclick="us(data)"  id="">
    <label for="">U.S.Polo Assn.</label>
    </div>

    <div>
    <input type="checkbox" name="T-Base"  onclick="tbase(data)"   id="">
    <label for="">T-Base</label>
    </div>

    <div>
    <input type="checkbox" name="Columbia"   onclick="columbia(data)"    id="">
    <label for="">Columbia</label>
    </div>

    <div>
    <input type="checkbox" name="NIKE" onclick="nike(data)" id="">
    <label for="">NIKE</label>
    </div>

</div>
<!-- brand cat over -->
<div class="screfineline"></div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Discount</div>
</div>

<div id="scdiscountcat">

    <div>
    <input type="checkbox" name="0to20"  onclick="under0to20(data)" id="" >
    <label for="">0-20%</label>
    </div>  
    
    <div>
    <input type="checkbox" name="21to30"   onclick="under20to30(data)" id="">
    <label for="">21-30%</label>
    </div>  

    <div>
    <input type="checkbox" name="31to40"   onclick="under30to40(data)" id="">
    <label for="">31-40%</label>
    </div>     

    <div>
    <input type="checkbox" name="41to50"  onclick="under40to50(data)"  id="">
    <label for="">41-50%</label>
    </div>  

    <div>
    <input type="checkbox" name="51to80"   onclick="under50to80(data)"  id="">
    <label for="">51-80%</label>
    </div>  

</div>
<!-- discount cat over -->
<div class="screfineline"></div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Occasion</div>
</div>
<div id="scoccasioncat">

    <div>
    <input type="checkbox" name="Active" id="">
    <label for="">Active</label>
    </div>

    <div>
    <input type="checkbox" name="Casual" id="">
    <label for="">Casual</label>
    </div>

    <div>
    <input type="checkbox" name="Special Occasion" id="">
    <label for="">Special Occasion</label>
    </div>

    <div>
    <input type="checkbox" name="Universal" id="">
    <label for="">Universal</label>
    </div>   

</div>
<!-- occasion cat over -->

<div class="screfineline"></div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Colors</div>
</div>

<div id="sccolors">

    <div class="fifty" id="fiftybeige"  ></div>
    <div class="fiftycolor">Beige</div>
    
    <div class="fifty" id="fiftyblack"></div>
    <div class="fiftycolor">Black</div>
    
    <div class="fifty" id="fiftyblue" ></div>
    <div class="fiftycolor" >Blue</div>
    
    <div class="fifty" id="fiftybronze"></div>
    <div class="fiftycolor" >Bronze</div>
    
    <div class="fifty"  id="fiftybrown"></div>
    <div class="fiftycolor">Brown</div>
    
    </div>
    <!-- colors cat over -->
<div class="screfineline"></div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Size & Fit</div>
</div>

<div id="scsizefitcat">

    <div>    
    <input type="checkbox" name="XXS" id="">
    <label for="">XXS</label>
    </div>

    <div>
    <input type="checkbox" name="XS" id="">
    <label for="">XS</label>
    </div>
    
    <div>
    <input type="checkbox" name="S" id="">
    <label for="">S</label>
    </div>
    
    <div>
    <input type="checkbox" name="M" id="">
    <label for="">M</label>
    </div>
    
    <div>
    <input type="checkbox" name="L" id="">
    <label for="">L</label>
    </div>
    

</div>
<!-- size cat over -->

<div class="screfineline"></div>



<div class="screfine" id="screfinemorefilters1">

    <p>More Filters<p>
        
    <img
    class="screfineimg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlFJyXnlww4XPP-vQQ3PNh7_y8LMYuUMXhx7LxZobswW6Cm2GlzebSYWWpMqebE3OPBA&usqp=CAU"
      alt=""
    />
</div>
<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Sleeve</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Pattern</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Feature</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Sport</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Character</div>
</div>


<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Collar</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Shape</div>
</div>

<div class="sclistflex">
    <div class="scplus">+</div>
    <div class="sclistrefinename">Fabric</div>
</div>
`
    count++;
    if (count % 2 === 0) {
        
        screfinelistmain1.appendChild(div);

    } else if(count % 2 !== 0) {
        
        screfinelistmain1.innerHTML = "";
      
    }
}  
   screfineid.addEventListener("click", refine);
     //sorting display

   //price sort

    //filter api function for the price filters
  //under1000api
  async function under1000api(gender,type) {
    try {
      const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbyprice/under1000/${gender}/${type}`);
  
      const dataapiunder1000 = await underapi.json();
      
      return dataapiunder1000;
    }
    catch (err) {
      console.log(err.message);
    }
  }
  ///between1001to1500
  async function under1000to1500api(gender,type) {
    try {
      const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbyprice/between1001to1500/${gender}/${type}`);
  
      const between1001to1500 = await underapi.json();
      
      return between1001to1500;
    }
    catch (err) {
      console.log(err.message);
    }
  }
  
  ///between1501to2000
  async function between1501to2000api(gender,type) {
    try {
      const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbyprice/between1501to2000/${gender}/${type}`);
  
      const between1501to2000 = await underapi.json();
      
      return between1501to2000;
    }
    catch (err) {
      console.log(err.message);
    }
  }
  
  ///above2000
  async function above2000api(gender,type) {
    try {
      const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbyprice/above2000/${gender}/${type}`);
  
      const above2000 = await underapi.json();
      
      return above2000;
    }
    catch (err) {
      console.log(err.message);
    }
  }
  
  
  
  
  let countunder1000 = 0;
  async function under1000(data) {
    let data1000 = await under1000api(data[0].gender, data[0].producttype);
    //console.log(data1000);
       if (countunder1000 % 2 == 0) {
          countunder1000++;
         scjsgrid1.innerHTML = "";
         displayProduct(data1000);
       } else {
          countunder1000++;
         scjsgrid1.innerHTML = "";
         displayProduct(datawhatsnew);
       }
      }
      
      //from1001 to 1500
  
      let countunder1000to1500 = 0;
     async function under1000to1500 (data){
      let data1000above = await under1000to1500api(data[0].gender, data[0].producttype);
       if (countunder1000to1500 % 2 == 0) {
          countunder1000to1500++;
        //  data.sort((a, b) => a.price - b.price);
        //  let arr1 = [];
        //  data.forEach((element) => {
        //    if (element.price >= 1000 && element.price <=1500) {
        //       arr1.push(element);
        //    }
        //  });
  
       
         scjsgrid1.innerHTML = "";
         displayProduct(data1000above);
       } else {
          countunder1000to1500++;
         scjsgrid1.innerHTML = "";
         displayProduct(datawhatsnew);
       }
      }
      
  
      let countunder1500to2000 = 0;
      async function under1500to2000 (data) {
        let data1500above = await between1501to2000api(data[0].gender, data[0].producttype);
        if (countunder1500to2000 % 2 == 0) {
          countunder1500to2000++;
          // data.sort((a, b) => a.price - b.price);
          // let arr1 = [];
          // data.forEach((element) => {
          //   if (element.price >= 1500 && element.price <=2000) {
          //      arr1.push(element);
          //   }
          // });
   
        
          scjsgrid1.innerHTML = "";
          displayProduct(data1500above);
        } else {
          countunder1500to2000++;
          scjsgrid1.innerHTML = "";
          displayProduct(datawhatsnew);
        }
       }
       
  
       let countunder2000above = 0;
      async function under2000above(data) {
        let data2000above = await above2000api(data[0].gender, data[0].producttype);
        if (countunder2000above % 2 == 0) {
          countunder2000above++;
          // data.sort((a, b) => a.price - b.price);
          // let arr1 = [];
          // data.forEach((element) => {
          //   if (element.price > 2000) {
          //      arr1.push(element);
          //   }
          // });
   
        
          scjsgrid1.innerHTML = "";
          displayProduct(data2000above);
        } else {
          countunder2000above++;
          scjsgrid1.innerHTML = "";
          displayProduct(datawhatsnew);
        }
  }
          
   // discount filters
  
  //filter api function for the discount filters
   //under20

   async function under20api(gender,type) {
    try {
      const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbydiscount/0to20percent/${gender}/${type}`);
  
      const dataapiunder20 = await underapi.json();
      
      return dataapiunder20;
    }
    catch (err) {
      console.log(err.message);
    }
}



//under30

async function under30api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbydiscount/21to30percent/${gender}/${type}`);

    const dataapiunder30 = await underapi.json();
    
    return dataapiunder30;
  }
  catch (err) {
    console.log(err.message);
  }
}



//under40

async function under40api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbydiscount/31to40percent/${gender}/${type}`);

    const dataapiunder40 = await underapi.json();
    
    return dataapiunder40;
  }
  catch (err) {
    console.log(err.message);
  }
}



//under50

async function under50api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbydiscount/41to50percent/${gender}/${type}`);

    const dataapiunder50 = await underapi.json();
    
    return dataapiunder50;
  }
  catch (err) {
    console.log(err.message);
  }
}



//under80

async function under80api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbydiscount/51to80percent/${gender}/${type}`);

    const dataapiunder80 = await underapi.json();
    
    return dataapiunder80;
  }
  catch (err) {
    console.log(err.message);
  }
}





   let count0to20 = 0;
  async function under0to20 (data) {
    let data20 = await under20api(data[0].gender, data[0].producttype);
     if (count0to20 % 2 == 0) {
        count0to20++;
      //  data.sort((a, b) => a.discount - b.discount);
      //  let arr1 = [];
      //  data.forEach((element) => {
      //    if (element.discount >=0  && element.discount <= 20) {
      //       arr1.push(element);
      //    }
      //  });

     
       scjsgrid1.innerHTML = "";
       displayProduct(data20);
     } else {
        count0to20++;
       scjsgrid1.innerHTML = "";
       displayProduct(datawhatsnew);
     }
}
    
let coun20to30 = 0;
async function under20to30 (data)  {
  let data30 = await under30api(data[0].gender, data[0].producttype);
  if (coun20to30 % 2 == 0) {
    coun20to30++;
    // data.sort((a, b) => a.discount - b.discount);
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.discount >20  && element.discount <= 30) {
    //      arr1.push(element);
    //   }
    // });

  
    scjsgrid1.innerHTML = "";
    displayProduct(data30);
  } else {
    coun20to30++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
 }


 let coun30to40 = 0;
async function  under30to40(data){
  let data40 = await under40api(data[0].gender, data[0].producttype);
  if (coun30to40 % 2 == 0) {
    coun30to40++;
    // data.sort((a, b) => a.discount - b.discount);
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.discount >30  && element.discount <= 40) {
    //      arr1.push(element);
    //   }
    // });
    scjsgrid1.innerHTML = "";
    displayProduct(data40);
  } else {
    coun30to40++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 
let coun40to50 = 0;
async function under40to50(data) {
  let data50 = await under50api(data[0].gender, data[0].producttype);
  if (coun40to50 % 2 == 0) {
    coun40to50++;
    // data.sort((a, b) => a.discount - b.discount);
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.discount >40  && element.discount <= 50) {
    //      arr1.push(element);
    //   }
    // });

  
    scjsgrid1.innerHTML = "";
    displayProduct(data50);
  } else {
    coun40to50++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 
let coun50to80 = 0;
async function under50to80(data){
  let data80 = await under80api(data[0].gender, data[0].producttype);
  if (coun50to80 % 2 == 0) {
    coun50to80++;
    // data.sort((a, b) => a.discount - b.discount);
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.discount >50  && element.discount <= 80) {
    //      arr1.push(element);
    //   }
    // });
    scjsgrid1.innerHTML = "";
    displayProduct(data80);
  } else {
    coun50to80++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 



//filter by brand
//filter api function for the brand filters
//brand 1 api
async function brand1api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbybrand/${gender}/${type}/JOHNPLAYERS`);

    const dataapibrand1 = await underapi.json();
    
    return dataapibrand1;
  }
  catch (err) {
    console.log(err.message);
  }
}

//brand 2 api
async function brand2api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbybrand/${gender}/${type}/CampusSutra`);

    const dataapibrand2 = await underapi.json();
    
    return dataapibrand2;
  }
  catch (err) {
    console.log(err.message);
  }
}

//brand 3 api
async function brand3api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbybrand/${gender}/${type}/U.S.PoloAssn.`);

    const dataapibrand3 = await underapi.json();
    
    return dataapibrand3;
  }
  catch (err) {
    console.log(err.message);
  }
}



//brand 4 api
async function brand4api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbybrand/${gender}/${type}/T-Base`);

    const dataapibrand4 = await underapi.json();
    
    return dataapibrand4;
  }
  catch (err) {
    console.log(err.message);
  }
}


//brand 5 api
async function brand5api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbybrand/${gender}/${type}/Columbia`);

    const dataapibrand5 = await underapi.json();
    
    return dataapibrand5;
  }
  catch (err) {
    console.log(err.message);
  }
}



//brand 6 api
async function brand6api(gender,type) {
  try {
    const underapi = await fetch(`https://ajio-clone-full.herokuapp.com/filterbybrand/${gender}/${type}/NIKE`);

    const dataapibrand6 = await underapi.json();
    
    return dataapibrand6;
  }
  catch (err) {
    console.log(err.message);
  }
}




// brand 1
let john1 = 0;
async function john (data){
  let databrand1 = await brand1api(data[0].gender, data[0].producttype);
  if (john1 % 2 == 0) {
    john1++;
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.brand ==="LEVIS") {
    //      arr1.push(element);
    //   }
    // });
    scjsgrid1.innerHTML = "";
    displayProduct(databrand1);
  } else {
    john1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 
//brand 2
let campus1 = 0;
async function campus(data) {
  let databrand2 = await brand2api(data[0].gender, data[0].producttype);
  if (campus1 % 2 == 0) {
    campus1++;
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.brand ==="Outryt") {
    //      arr1.push(element);
    //   }
    // });
    scjsgrid1.innerHTML = "";
    displayProduct(databrand2);
  } else {
    campus1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 

//brand 3
let us1 = 0;
async function us (data)  {
  let databrand3 = await brand3api(data[0].gender, data[0].producttype);
  if (us1 % 2 == 0) {
    us1++;
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.brand ==="DNMX" ) {
    //      arr1.push(element);
    //   }
    // });
    scjsgrid1.innerHTML = "";
    displayProduct(databrand3);
  } else {
    us1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 
// brand 4
let tbase1 = 0;
async function tbase (data){
  let databrand4 = await brand4api(data[0].gender, data[0].producttype); 
  if (tbase1 % 2 == 0) {
    tbase1++;
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.brand ==="ORCHID BLUES") {
    //      arr1.push(element);
    //   }
    // });
    scjsgrid1.innerHTML = "";
    displayProduct(databrand4);
  } else {
    tbase1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
}
 

// brand 5 
let columbia1 = 0;
async function columbia (data){
  let databrand5 = await brand5api(data[0].gender, data[0].producttype);
  if (columbia1 % 2 == 0) {
    columbia1++;
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.brand ==="DENIZEN WOMENS") {
    //      arr1.push(element);
    //   }
    // });
    scjsgrid1.innerHTML = "";
    displayProduct(databrand5);
  } else {
    columbia1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
 }


 //brand 6 
 let nike1 = 0;
async function  nike (data){
  let databrand6 = await brand6api(data[0].gender, data[0].producttype);
  if (nike1 % 2 == 0) {
    nike1++;
    // let arr1 = [];
    // data.forEach((element) => {
    //   if (element.brand ==="Dolce Crudo" ) {
    //      arr1.push(element);
    //   }
    // });
    scjsgrid1.innerHTML = "";
    displayProduct(databrand6);
  } else {
    nike1++;
    scjsgrid1.innerHTML = "";
    displayProduct(datawhatsnew);
  }
 }
const showSingleProd = (prodData) => {
  window.location.href = `/yourproduct/${prodData}`
}