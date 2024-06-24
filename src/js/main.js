  new WOW().init();

(function ($) {
  $(document).ready( function () {

// HEADER-BURGER ========================================================================================================================================================

  $('.header__burger').on('click', function () {
  
    if($(this).hasClass('active')){
      $(this).toggleClass("active");
      $('body').css('overflow', 'auto');
      $('header').addClass('header_mobile');
      $('.container__header-menu').removeClass('open')
    }
    
    else{
      $('header').removeClass('header_mobile')
      $(this).toggleClass("active");
      $('body').css('overflow', 'hidden');
      $('.container__header-menu').addClass('open')
    }
    
  });
  

//HEADER LOGO ========================================================================================================================================================

function appendMenuEl() {
  if (window.matchMedia("(min-width: 1280px)").matches) {
      $('.header__logo-wrapper').insertAfter('.header__item-menu-left')
      $('.menu-item.my_acc').appendTo('#menu-header-2')
    }
  else {
    $('.header__logo-wrapper').prependTo('.header__wrapper')
    $('.menu-item.my_acc').insertBefore('.header__burger')
  }
}
appendMenuEl();

$(window).on('resize', () => {
  appendMenuEl(); 
});


// HEADER-SCROLL ========================================================================================================================================================

    let scrollChange = 5;
        
    function headerScroll(params) {
      
      let scroll = $(window).scrollTop();
      
      if (scroll >= scrollChange) {
        $('.header').addClass('header_scroll');
      }
      else {
        $('.header').removeClass('header_scroll');
      }
    }

    $(document).on('scroll', ()=>{
      headerScroll();  
    })
  
    headerScroll();


   //ANIMATION h1 HERO SECTION ============================================================
gsap.registerPlugin(ScrollTrigger);

const text = document.querySelectorAll('.text');

text.forEach(elem => {

  const splitText = (el) => {
    const content = el.innerHTML;
    const splitContent = content.split(/(<b>|<\/b>|<br>)/); 
    el.innerHTML = splitContent.map(part => {

      if (part === "<b>" || part === "</b>") {
        return part;
      }

      return `<span class="word">${part.split('').map(letter => `<span class='letter'>${letter}</span>`).join('')}</span>`;
    }).join('');
    return el;
  };

  const split = splitText(elem);

});

gsap.from('h1.hero__title span.letter', {
  opacity: 0,
  y: 30,
  duration: 0.3,
  stagger: 0.03,
});
  //services slider =============================================================================================================================================
    
    if ($(".services__slider").length > 0) {
      const servicesSlider = new Swiper('.services__slider', {
       slidesPerView: 3,
       speed: 1000,
       spaceBetween: 25,
       loop: true,
       autoplay: true,
       pagination: {
        el: ".pagination-services-slider",
        clickable: true,
       },
       breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        576: {
          slidesPerView: 2, 
          spaceBetween: 20
        },
        992: {
          spaceBetween: 30,
          slidesPerView: 3 
        },
      }
     })
    };
//portfolio slider =============================================================================================================================================
    
    if ($(".portfolio__slider").length > 0) {
      const servicesSlider = new Swiper('.portfolio__slider', {
       slidesPerView: 3,
       speed: 1000,
       spaceBetween: 25,
       loop: true,
       autoplay: true,
       pagination: {
        el: ".pagination-portfolio-slider",
        clickable: true,
       },
       breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        500: {
          slidesPerView: 2, 
          spaceBetween: 20
        },
        992: {
          spaceBetween: 30,
          slidesPerView: 3 
        },
      }
     })
    };
    
//testimonials slider =============================================================================================================================================
    
    if ($(".testimonials__slider").length > 0) {
      const servicesSlider = new Swiper('.testimonials__slider', {
       slidesPerView: 3,
       speed: 1000,
       spaceBetween: 25,
       loop: true,
       autoplay: true,
       breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        576: {
          slidesPerView: 1.5, 
          spaceBetween: 20
        },
        992: {
          spaceBetween: 30,
          slidesPerView: 2.5
        },
      }
     })
    };
//RATING ================================================================================================================================================================

$(".star__rating").each(function() {
  let rating = parseFloat($(this).data('rating'));
  let roundedRating = Math.floor(rating);
  let result = '';
  let fullStar = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1787 12.0332C18.2488 9.36536 18.7838 8.03145 19.6531 7.84658C19.8817 7.79797 20.118 7.79797 20.3465 7.84658C21.2158 8.03145 21.7509 9.36536 22.821 12.0332C23.4296 13.5503 23.7339 14.3089 24.3032 14.8248C24.4629 14.9695 24.6363 15.0984 24.8208 15.2097C25.4789 15.6063 26.3004 15.6799 27.9434 15.827C30.7246 16.0761 32.1153 16.2006 32.5399 16.9935C32.6279 17.1578 32.6877 17.3356 32.7168 17.5195C32.8576 18.4079 31.8353 19.338 29.7907 21.1982L29.2229 21.7148C28.267 22.5845 27.789 23.0193 27.5126 23.562C27.3467 23.8875 27.2355 24.2381 27.1834 24.5997C27.0966 25.2025 27.2365 25.8333 27.5165 27.095L27.6165 27.5457C28.1185 29.8083 28.3695 30.9396 28.0561 31.4956C27.7747 31.9951 27.2563 32.3149 26.6836 32.3422C26.0461 32.3727 25.1478 31.6407 23.3511 30.1767C22.1675 29.2122 21.5756 28.7299 20.9186 28.5415C20.3182 28.3693 19.6815 28.3693 19.0811 28.5415C18.4241 28.7299 17.8322 29.2122 16.6485 30.1767C14.8519 31.6407 13.9536 32.3727 13.3161 32.3422C12.7434 32.3149 12.225 31.9951 11.9435 31.4956C11.6302 30.9396 11.8812 29.8083 12.3832 27.5457L12.4832 27.095C12.7631 25.8333 12.9031 25.2025 12.8162 24.5997C12.7641 24.2381 12.653 23.8875 12.4871 23.562C12.2107 23.0193 11.7327 22.5845 10.7768 21.7148L10.209 21.1982C8.16437 19.338 7.14204 18.4079 7.28283 17.5195C7.31199 17.3356 7.37179 17.1578 7.45974 16.9935C7.88441 16.2006 9.27504 16.0761 12.0563 15.827C13.6993 15.6799 14.5208 15.6063 15.1788 15.2097C15.3634 15.0984 15.5368 14.9695 15.6965 14.8248C16.2658 14.3089 16.5701 13.5503 17.1787 12.0332Z" fill="#FD853A" stroke="#FD853A"/></svg>';
  let emptyStar = '<svg width="40" height="40" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7428 10.1265C14.5989 7.99224 15.027 6.92511 15.7224 6.77721C15.9053 6.73832 16.0943 6.73832 16.2771 6.77721C16.9726 6.92511 17.4006 7.99224 18.2567 10.1265C18.7436 11.3402 18.987 11.947 19.4425 12.3598C19.5702 12.4756 19.7089 12.5787 19.8566 12.6677C20.383 12.985 21.0402 13.0438 22.3546 13.1616C24.5796 13.3608 25.6921 13.4605 26.0319 14.0948C26.1022 14.2262 26.1501 14.3684 26.1734 14.5156C26.286 15.2263 25.4682 15.9704 23.8324 17.4585L23.3782 17.8718C22.6135 18.5675 22.2311 18.9154 22.01 19.3495C21.8773 19.61 21.7883 19.8904 21.7466 20.1797C21.6772 20.662 21.7891 21.1666 22.0131 22.1759L22.0931 22.5365C22.4947 24.3466 22.6955 25.2516 22.4448 25.6965C22.2197 26.096 21.8049 26.3519 21.3468 26.3737C20.8368 26.3981 20.1181 25.8125 18.6808 24.6413C17.7339 23.8697 17.2604 23.4839 16.7348 23.3332C16.2545 23.1954 15.7451 23.1954 15.2648 23.3332C14.7391 23.4839 14.2657 23.8697 13.3187 24.6413C11.8814 25.8125 11.1628 26.3981 10.6527 26.3737C10.1946 26.3519 9.77989 26.096 9.55474 25.6965C9.30408 25.2516 9.50487 24.3466 9.90647 22.5365L9.98648 22.1759C10.2104 21.1666 10.3224 20.662 10.2529 20.1797C10.2112 19.8904 10.1223 19.61 9.9896 19.3495C9.76843 18.9154 9.38607 18.5675 8.62134 17.8718L8.16711 17.4585C6.5314 15.9704 5.71354 15.2263 5.82617 14.5156C5.8495 14.3684 5.89733 14.2262 5.9677 14.0948C6.30743 13.4605 7.41994 13.3608 9.64495 13.1616C10.9593 13.0438 11.6165 12.985 12.143 12.6677C12.2906 12.5787 12.4293 12.4756 12.5571 12.3598C13.0126 11.947 13.256 11.3402 13.7428 10.1265Z" stroke="#FD853A"/></svg>';
  $(this).empty();
  for (let i = 0; i < 5; i++) {
    if (roundedRating > i) {
      result += fullStar;
    }
    else {
      result += emptyStar;
    }
  }
  $(this).html(result);
});   
    
//SCROLL TO SECTION =========================================================================================================================

$('.menu-item a, .btn-hero a').click(function(event) {
event.preventDefault();

$('html, body').animate({
scrollTop: $( $(this).attr('href') ).offset().top - 65
}, 1000);

return false;
});
// GET YEAR ========================================================================================================================================================

if (document.querySelectorAll('.year').length > 0) {

  let yearSpan = document.querySelector('.year');
  let date = new Date;
  let yearFull = date.getFullYear();

  yearSpan.innerHTML = yearFull;
}    
    


gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Observer);    
//services section move img
//services section move img
// if (document.querySelector('.services__icon').length > 0) {
    document.querySelectorAll('.services__icon').forEach((icon, index) => {
        let tween;
        if (index === 2) {
            tween = gsap.to(icon, {
                x: "-100%",
                rotation: 120,
                scale: 0.5,
                duration: 1.5,
                ease: "linear",
                scrollTrigger: {
                    trigger: icon,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleClass: {targets: icon, className: "active"},
                    scrub: true,
                    onUpdate: self => {
                        // Перевірка умов для виклику reverse()
                        if (self.scrollTrigger && self.scrollTrigger.tween && self.direction === -1 && self.progress < 0.3) {
                            self.scrollTrigger.tween.reverse(); // Звертаємо анімацію
                        } else if (self.scrollTrigger && self.scrollTrigger.tween && self.direction === 1 && self.progress > 0.7) {
                            self.scrollTrigger.tween.play(); // Відтворюємо анімацію
                        }
                    }
                }
            });
        } else if (index === 1) { 
            tween = gsap.to(icon, {
                y: "50%",
                rotation: -45,
                duration: 2,
                scale: 1.8,
                ease: "linear",
                scrollTrigger: {
                    trigger: icon,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleClass: {targets: icon, className: "active"},
                    scrub: true,
                    onUpdate: self => {
                        // Перевірка умов для виклику reverse()
                        if (self.scrollTrigger && self.scrollTrigger.tween && self.direction === -1 && self.progress < 0.3) {
                            self.scrollTrigger.tween.reverse(); // Звертаємо анімацію
                        } else if (self.scrollTrigger && self.scrollTrigger.tween && self.direction === 1 && self.progress > 0.7) {
                            self.scrollTrigger.tween.play(); // Відтворюємо анімацію
                        }
                    }
                }
            });
        } else if (index === 0) {
            tween = gsap.to(icon, {
                x: "70%",
                y: "20%",
                rotation: 45,
              duration: 2.5,
                scale: 0.5,
                ease: "linear",
                scrollTrigger: {
                    trigger: icon,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleClass: {targets: icon, className: "active"},
                    scrub: true,
                    onUpdate: self => {
                        // Перевірка умов для виклику reverse()
                        if (self.scrollTrigger && self.scrollTrigger.tween && self.direction === -1 && self.progress < 0.3) {
                            self.scrollTrigger.tween.reverse(); // Звертаємо анімацію
                        } else if (self.scrollTrigger && self.scrollTrigger.tween && self.direction === 1 && self.progress > 0.7) {
                            self.scrollTrigger.tween.play(); // Відтворюємо анімацію
                        }
                    }
                }
            });
        }
    });
// }

//COUNTER ========================================================================================================
    
let counter = { value: 0 };

// Створюємо анімацію лічильника
const counterTween = gsap.to(counter, {
    value: 50, 
    duration: 2,
    onUpdate: function() {
        document.getElementById("quantity").textContent = Math.ceil(counter.value);
    },
    ease: "power1.out",
    paused: true 
});


ScrollTrigger.create({
    trigger: "#quantity", // Селектор елемента, що викликає відображення
    start: "top 50%", // Початок зони видимості
    onEnter: function() {
        counterTween.play(); // При вході в область видимості відтворюємо анімацію
    },
    once: true // Спрацьовує тільки один раз
});
    
    
    
    
});
})(jQuery);




