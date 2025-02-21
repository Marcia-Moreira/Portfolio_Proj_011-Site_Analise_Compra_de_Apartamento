// Código para Movimentar efeitos da Biblioteca ScrollReveal

// const { reset } = require("nodemon");

// ScrollReveal
// https://scrollrevealjs.org/
// Já que usamos o visibility hidden no css, precisamos resetar para mostrar novamente!!!
window.revelar = ScrollReveal({reset:true});

revelar.reveal('.reveal-left', {duration: 2000, origin: 'left', distance: '300px' });

revelar.reveal('.coluna-1', { duration: 2000, origin: 'bottom', distance: '300px' })

revelar.reveal('.coluna-2', { duration: 2000, origin: 'bottom', distance: '300px' })

revelar.reveal('.coluna-3', { duration: 2000, origin: 'bottom', distance: '300px' })

// Classes DELAY:
revelar.reveal('.delay-100', { delay: 100 });

revelar.reveal('.delay-200', { delay: 200 });

revelar.reveal('.delay-300', { delay: 300 });

revelar.reveal('.delay-400', { delay: 400 });

revelar.reveal('.delay-500', { delay: 500 });

// Configurações:
// revelar.reveal('.reveal', { delay: 200, duration: 1000, origin: 'bottom', distance: '50px' });
// revelar.reveal('.reveal-left', { delay: 200, duration: 1000, origin: 'left', distance: '50px' });
// revelar.reveal('.reveal-right', { delay: 200, duration: 1000, origin: 'right', distance: '50px' });
// revelar.reveal('.reveal-top', { delay: 200, duration: 1000, origin: 'top', distance: '50px' });
// revelar.reveal('.reveal-bottom', { delay: 200, duration: 1000, origin: 'bottom', distance: '50px' });
