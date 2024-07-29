

//Navigation Glass Morphism
window.addEventListener('scroll', function () {
    var navitems = document.getElementById('nav1');
    var scrolled = window.scrollY > 50;

    if (scrolled) {
        nav1.classList.add('scrolled');
    } else {
        nav1.classList.remove('scrolled');
    }
});

//Text Caraousel
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

//pdf downloader
document.getElementById('downloadButton').addEventListener('click', function() {
    downloadPDF();
});

function downloadPDF() {
    // Replace 'YOUR_RAW_PDF_URL' with the actual raw PDF URL from GitHub
    var pdfUrl = 'Assets/Resume_01-2024.pdf';
    
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'DB-Resume.pdf';
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Trigger the click event on the link
    link.click();
    
    // Remove the link from the body
    document.body.removeChild(link);
}

function designpage() {
    // Redirect to another webpage
    window.location.href = "https://divyanshbajpai27.github.io/Divyansh/Design/design.html";
}
