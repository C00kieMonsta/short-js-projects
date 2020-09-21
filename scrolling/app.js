// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {

    // we do not want to use hardcoded height
    // linksContainer.classList.toggle('show-links');

    // adding inline style
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = `${0}px`;
    }
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', () => {
    const scrollHeigh = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    
    // fix navbar
    if (scrollHeigh > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    // show top-link
    if (scrollHeigh > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1); // href has the name of section id
        const element = document.getElementById(id);
        
        // calculate proper heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const isFixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!isFixedNav) {
            position = position - navHeight;
        }

        // if bigger, then nav is open
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = `${0}px`; // close menu
    });

});