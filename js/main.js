$(window).on("load" , function(){
  $(".preloader").fadeOut();
})


$(document).ready(function(){

  // main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
   autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});


//  services swiper

const servicesSwiper = new Swiper(' .services .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.services .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween : 10 
    },
    500: {
      slidesPerView: 2,
      spaceBetween : 10 
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//  offers swiper

const offersSwiper = new Swiper(' .offers .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.offers .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween : 20 
    },
    768: {
      slidesPerView: 2,
      spaceBetween : 30 ,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});


//  helping swiper
if($(window).innerWidth() < 768){
  const helpingSwiper = new Swiper(' .helping .swiper', {
    loop: true,
    autoplay: true,
    draggable: true,
    allowTouchMove : true ,
   
    pagination: {
      el: '.helping .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween : 10 ,
      },
    }
  });
  
}

//  branches swiper
if($(window).innerWidth() < 992){
  const branchesSwiper = new Swiper(' .branches .swiper', {
    loop: true,
    autoplay: true,
    draggable: true,
    allowTouchMove : true ,
    pagination: {
      el: '.branches .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween : 10 ,
      },
      768: {
        slidesPerView: 2,
        spaceBetween : 20 ,
      },
    }
  });
  
}



// Clients review swiper

const clientsReview = new Swiper('.clients-reviews .swiper', {
  loop: true,
  autoplay: true,
  allowTouchMove: true,
  draggable: true,
  navigation: {
    nextEl: ' .clients-reviews .swiper-button-next',
    prevEl: '.clients-reviews .swiper-button-prev',
  },
  pagination: {
    el: '.clients-reviews .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 1.6,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});








// **************************************************************************************************


// open and close sideBar

$(".openNav-btn").click(function(){
  $("nav").addClass("open-nav");
  $("body").addClass("overflow-hidden");
})

$(".closeNav-btn").click(function(){
  $("nav").removeClass("open-nav");
  $("body").removeClass("overflow-hidden");
})


// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $(window).scrollTop(0);
}) 


// **************************************************************************************************


//fixed nav

let myHeader = document.querySelector("header"),
prevScrollposition = $(window).scrollTop();

$(window).on("scroll", function () {
   if ($(window).scrollTop() > 150) {
       $(myHeader).addClass("fixed");
       if(!$(".pages-body")){
        $(".logo img").attr("src" , "images/footer-logo.png")
       }
       
   } else {
       $(myHeader).removeClass("fixed");
       if(!$(".pages-body")){
        $(".logo img").attr("src" , "images/logo.png")
       }
       
   }
   var scrollTop = $(window).scrollTop();
   prevScrollposition < scrollTop && prevScrollposition > 0 ? myHeader.classList.add("stayTop") : myHeader.classList.remove("stayTop"), (prevScrollposition = scrollTop);
 });

 

 if($(".pages-body")){
  $(".logo img").attr("src" , "images/footer-logo.png")
 }




// **************************************************************************************************




// show and hide search box

$(".openSearch-btn").click(function(){
  console.log(10)
  $(".search-overlay").fadeIn(200);
  $("body").addClass("overflow-hidden") ;
  $(".search-input").addClass("open-search");
})
$(".search-overlay").click(function(){
    $(".search-input").removeClass("open-search");
    setTimeout(() => {
    $(".search-overlay").fadeOut(200);
  }, 200);
  $("body").removeClass("overflow-hidden") ;
})

$(".search-input").click(function(e){
  e.stopPropagation();
})





// **************************************************************************************************


//  nested menus in footer


if($(window).width() < 768){
  $(".footer-title").click(function(){
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }




/********************************************************************************* */


})







