
 
    
$('.single-item').slick({
    arrows: false,
    autoplay:true,
    infinite: true,
  speed: 300,
  slidesToShow: 1,
  dots:true,
  fade: true
});

$('.Ten').slick({
    arrows: false,
    autoplay:true,
    infinite: true,
  speed: 400,
  slidesToShow: 1,
  dots:true,
  fade: true
});



$('.responsive').slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
});








let headingimgnum = 0 ;

let arr = ["/Images/Same_img_heading/1.jpg" , "/Images/Same_img_heading/2.jpg" , "/Images/Same_img_heading/3.jpg" , "/Images/Same_img_heading/4.webp", "/Images/Same_img_heading/5.webp" , "/Images/Same_img_heading/6.webp" , "/Images/Same_img_heading/7.webp", "/Images/Same_img_heading/8.webp", "/Images/Same_img_heading/9.webp", "/Images/Same_img_heading/10.webp", "/Images/Same_img_heading/11.webp","/Images/Same_img_heading/12.webp", "/Images/Same_img_heading/13.webp"]

let heding_img = document.querySelectorAll(".sameimgheading")

let heding_img_arr = Object.values(heding_img) 

heding_img_arr.forEach((d)=>{
    d.innerHTML =  `<img  class="slider_down_img" src=${arr[headingimgnum]} alt="">`
    headingimgnum++
})



function gotowoen() {
  window.location.href = "../product page/productwomenjeans.html"
}


function gotomen(){
  window.location.href = "../product page/productjackets.html"
}