window.addEventListener('scroll', function () {
    var navitems = document.getElementById('nav1');
    var scrolled = window.scrollY > 50;

    if (scrolled) {
        nav1.classList.add('scrolled');
    } else {
        nav1.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });


        const currentHeight = slides[currentSlide].offsetHeight;
        document.querySelector('.carousel').style.height = currentHeight + 'px';
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide();
    }

    window.addEventListener('resize', showSlide);
    setInterval(nextSlide, 3000);

    showSlide(); // Immediately show the first slide
});