// smooth scroll JS

var scroll = new SmoothScroll('.navbar a[href*="#"]',{
    speed: 500
});

// when clicked on 'Hire Me' scroll to Contact Form
const scrollToContact = new SmoothScroll('.hire-me a[href*="#]', {
    speed:500
});

// when click on 'top' scroll to Top
const scrollToTop = new SmoothScroll('.to-top a[href*="#]', {
    speed:500
});