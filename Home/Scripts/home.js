$('.single-item').slick({
    arrows: false,
    autoplay:true,
    infinite: true,
  speed: 400,
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
 
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {        slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]
});








let headingimgnum = 0 ;

let arr = ["../Home/Images/Same_img_heading/1.jpg" , "../Home/Images/Same_img_heading/2.jpg" , "../Home/Images/Same_img_heading/3.jpg" , "../Home/Images/Same_img_heading/4.webp", "../Home/Images/Same_img_heading/5.webp" , "../Home/Images/Same_img_heading/6.webp" , "../Home/Images/Same_img_heading/7.webp", "../Home/Images/Same_img_heading/8.webp", "../Home/Images/Same_img_heading/9.webp", "../Home/Images/Same_img_heading/10.webp", "../Home/Images/Same_img_heading/11.webp","../Home/Images/Same_img_heading/12.webp", "../Home/Images/Same_img_heading/13.webp"]

let heding_img = document.querySelectorAll(".sameimgheading")

let heding_img_arr = Object.values(heding_img) 

heding_img_arr.forEach((d)=>{
    d.innerHTML =  `<img  class="slider_down_img" src=${arr[headingimgnum]} alt="">`
    headingimgnum++
})




let hidethenavbar = document.querySelector(".input_serach_div_secon_nav")

let navbar = document.querySelector("#hovermain")

hidethenavbar.addEventListener("click", hide)

function hide() {
  navbar.style.display = "none"
}