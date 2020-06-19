const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

// Scroll magic
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration: 25000,
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller)

const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller)

// Video animation
let accelamount = 0.5;
let scrollpos = 0.5;
let delay = 1500;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay

}, 100);