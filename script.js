ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('#hero h1, .about .content p, #hero h2,  #about .content h3, .section-title h2, #hero a, a', { origin: 'top' });
ScrollReveal().reveal('.about .icon-boxes .icon-box,  .services .icon-box', { origin: 'bottom' }); 