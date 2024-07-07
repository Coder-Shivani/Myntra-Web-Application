document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.navigation-dots .dot');
    const slides = document.querySelectorAll('.slider-container .slide');
    const sliderContainer = document.querySelector('.slider-container');
    let currentIndex = 0;
    const slideInterval = 5000; // Adjust the interval as needed
    const slideCount = slides.length;

    function updateDots(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function moveToSlide(index) {
        const newLeft = `-${index * 100}%`;
        sliderContainer.style.left = newLeft;
        updateDots(index);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            moveToSlide(currentIndex);
        });
    });

    // Auto slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        moveToSlide(currentIndex);
    }, slideInterval);

    // Initialize the first dot as active
    updateDots(currentIndex);
});

// second section js

