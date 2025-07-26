 const minRange = document.getElementById('minRange');
    const maxRange = document.getElementById('maxRange');
    const priceLabel = document.getElementById('priceLabel');
    const sliderTrack = document.getElementById('sliderTrack');

    function updateSlider() {
      let minVal = parseInt(minRange.value);
      let maxVal = parseInt(maxRange.value);
      if (minVal > maxVal - 10) {
        minVal = maxVal - 10;
        minRange.value = minVal;
      }
      const minPercent = ((minVal - 10) / (470 - 10)) * 100;
      const maxPercent = ((maxVal - 10) / (470 - 10)) * 100;
sliderTrack.style.background = `linear-gradient(to right, #666 ${minPercent}%, red ${minPercent}%, red ${maxPercent}%, #666 ${maxPercent}%)`;
      priceLabel.textContent = `Price: $${minVal} – $${maxVal}`;
    }

    minRange.addEventListener('input', updateSlider);
    maxRange.addEventListener('input', updateSlider);
    updateSlider();



  const cards = document.querySelectorAll('.card');
  const itemsPerPage = 12;
  let currentPage = 1;

  function showPage(page) {
    cards.forEach((card, index) => {
      card.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
    });
  }

  showPage(currentPage);

  document.querySelectorAll('.custom-page').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const page = this.dataset.page;
      if (page) {
        currentPage = parseInt(page);
        showPage(currentPage);
      }
    });
  });

  document.getElementById('nextBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const totalPages = Math.ceil(cards.length / itemsPerPage);

    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }else{
    currentPage = 1;
          showPage(currentPage);

    }
  });