const desktopImages = [
    '<img src="images/d-hero-1.jpg" alt="Room furniture" class="header__figure-image">',
    '<img src="images/d-hero-2.jpg" alt="Room furniture" class="header__figure-image">',
    '<img src="images/d-hero-3.jpg" alt="Room furniture" class="header__figure-image">'
];

const mobileImages = [
    '<img src="images/m-hero-1.jpg" alt="Room furniture" class="header__figure-image">',
    '<img src="images/m-hero-2.jpg" alt="Room furniture" class="header__figure-image">',
    '<img src="images/m-hero-3.jpg" alt="Room furniture" class="header__figure-image">'
]

const imageContainer = [...document.querySelectorAll('.header__figure')];

const breakpoint = window.matchMedia("(min-width: 768px)");

const responsive = (e) => {
    if (e.matches) {
        for (let i = 0; i < imageContainer.length; i++) {
            imageContainer[i].innerHTML = `${desktopImages[i]}`;
        }
    } else {
        for (let i = 0; i < imageContainer.length; i++) {
            imageContainer[i].innerHTML = `${mobileImages[i]}`;
        }
    }
}

breakpoint.addListener(responsive);
responsive(breakpoint);