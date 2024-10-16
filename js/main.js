
const toggle = document.getElementById('toggle-menu');
const menu = document.getElementById('block-drupal-tailwind-theme-main-menu');

toggle.addEventListener("click", function() {
    if ( toggle.classList.contains("expanded") ) {
        menu.classList.add("hidden")
        toggle.classList.remove("expanded")
    }
    else {
        menu.classList.remove("hidden")
        toggle.classList.add("expanded")
    }
});

let maxHeight = Array.from(document.getElementsByClassName('field--name-field-max-height'));
Array.prototype.map.call(maxHeight, mh => {
    mh.parentNode.querySelector(".hero-image").classList.add('md:max-h-[' + mh.innerText + 'vh]')
});

let maxWidth = Array.from(document.getElementsByClassName('field--name-field-max-width'));
Array.prototype.map.call(maxWidth, mw => {
    mw.parentNode.classList.add('max-w-' + mw.innerText, 'mx-auto');
});

let bgColor = Array.from(document.getElementsByClassName('field--name-field-background'));
Array.prototype.map.call(bgColor, bg => {
        bg.parentNode.classList.add('bg-' + bg.innerText, 'text-neutral-300');
        bg.style.display = 'none';
});

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    let bgImage = Array.from(document.querySelectorAll(".hero-image"));
    Array.prototype.map.call(bgImage, bg => {
        let top = bg.getBoundingClientRect().top;
        if (scroll > top) {
            bg.style.backgroundPosition = `50% calc(50% + ${(scroll-top)*0.2}px)`;
        }
        else {
            bg.style.backgroundPosition = 'center';
        }
    });
});