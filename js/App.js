
//Hero swiper sstart
 var swiper = new Swiper(".mySwiper", {
     speed:4000,
    spaceBetween: 0,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
        delay: 3000,
    },
  });

  //Hero swiper End

// Mobail mennu
let mobailMenuIcon=document.querySelector('.fa-bars');
let menu=document.querySelector('.menu');

mobailMenuIcon.addEventListener('click', function(){
  menu.classList.toggle("open");
});



 