const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,

      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

let questions = document.querySelectorAll(".questions .question")

questions.forEach(question => {
    let loc = question.querySelector('.question-dropdown');

    loc.style.height = 0 + 'px';
    if (loc.scrollHeight > 230) {
        if (loc.classList.contains('noscrollbar')) {
            loc.classList.remove('noscrollbar')
        }
    }else{
        if (!loc.classList.contains('noscrollbar')) {
            loc.classList.add('noscrollbar')
        }
    }

    question.addEventListener('click', function(e){
        e.preventDefault();
        loc.classList.toggle('active');
        let hght = loc.scrollHeight;
        if (loc.classList.contains('active')){
            loc.style.height = (hght + 1) + 'px';
            loc.style.marginTop = "10px"
        }else{
            loc.style.height = 0 + 'px';
            loc.style.marginTop = "0"
        }
    })
})