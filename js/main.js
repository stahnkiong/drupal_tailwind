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