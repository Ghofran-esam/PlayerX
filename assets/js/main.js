var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
        autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

     breakpoints: {
    1024: {
      slidesPerView: 6
    },
    768: {
      slidesPerView: 4
    },
    590: {
      slidesPerView: 3
    },
   430:{
            slidesPerView: 2
    },
    200:{
                  slidesPerView: 1

    },
  }
    });

    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },


      
    });
      
      document.getElementById('sendBtn').addEventListener('click', function (event) {
          event.preventDefault();
        const emailInput = document.getElementById('newsletterEmail');
        const emailValue = emailInput.value;
  const emailPattern =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue === "") {
  Swal.fire({
    title: "Field is required",
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "#d33"
  });
} 
   else if (!emailPattern.test(emailValue)) {
      Swal.fire({
    title: "Invalid email",
    text: "Please enter a valid email address.",
    icon: "error",
    confirmButtonText: "OK",
    confirmButtonColor: "#d33"
  });
   emailInput.value = "";
    }
   else {
  Swal.fire({
    title: " Successfully subscribed!",
    text: "Thank you!",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#28a745"
  });
  emailInput.value = "";
}

      });
    

  const rows = document.querySelectorAll('.row');

  rows.forEach(row => {
    row.addEventListener('click', () => {
      rows.forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });
  });








