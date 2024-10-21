const pageUtils = {
    init: function() {
        this.setInitialValues();
        this.setupToggleMenu();
        this.applyMaxHeight();
        this.applyMaxWidth();
        this.applyBackgroundColor();
        this.setupScrollEffect();
    },

    setInitialValues: function() {
        window.onload = function() {
            const editContactNumber = document.getElementById('edit-contact-number');
            if (editContactNumber) {
                editContactNumber.value = '+60';
            }
        };
    },

    setupToggleMenu: function() {
        const toggle = document.getElementById('toggle-menu');
        const menu = document.getElementById('block-drupal-tailwind-theme-main-menu');

        toggle.addEventListener("click", () => {
            if (toggle.classList.contains("expanded")) {
                menu.classList.add("hidden");
                toggle.classList.remove("expanded");
            } else {
                menu.classList.remove("hidden");
                toggle.classList.add("expanded");
            }
        });
    },

    applyMaxHeight: function() {
        let maxHeightElements = Array.from(document.getElementsByClassName('field--name-field-max-height'));
        maxHeightElements.forEach(mh => {
            mh.parentNode.querySelector(".hero-image").classList.add('md:max-h-[' + mh.innerText + 'vh]');
        });
    },

    applyMaxWidth: function() {
        let maxWidthElements = Array.from(document.getElementsByClassName('field--name-field-max-width'));
        maxWidthElements.forEach(mw => {
            mw.parentNode.classList.add('max-w-' + mw.innerText, 'mx-auto');
        });
    },

    applyBackgroundColor: function() {
        let bgColorElements = Array.from(document.getElementsByClassName('field--name-field-background'));
        bgColorElements.forEach(bg => {
            bg.parentNode.classList.add('bg-' + bg.innerText, 'text-neutral-300');
            bg.style.display = 'none';  // Hide the element
        });
    },

    setupScrollEffect: function() {
        window.addEventListener("scroll", () => {
            const scroll = window.scrollY;
            let bgImages = Array.from(document.querySelectorAll(".hero-image"));
            bgImages.forEach(bg => {
                let top = bg.getBoundingClientRect().top;
                if (scroll > top) {
                    bg.style.backgroundPosition = `50% calc(50% + ${(scroll - top) * 0.2}px)`;
                } else {
                    bg.style.backgroundPosition = 'center';
                }
            });
        });
    }
};

// Initialize all functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    pageUtils.init();
});
