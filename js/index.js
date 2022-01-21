const mainPage = document.querySelector('#mainPage');

function render_header() {
    mainPage.innerHTML += `<div id="header"></div>`;
    const headerNative = document.querySelector('#header');
    function render_header_native() {
        headerNative.innerHTML += `
        <a id="logo__main" href="#">TEAM 1 - GROUP 6.</a>
        <a class="native" href="#">Men</a>
        <a class="native" href="#">Women</a>
        <a class="native" href="#">About us</a>
        <a class="native" href="#">Wishlist</a>
        <span id="user__container"><a href="#">Login</a><a href="#">Register</a></span>
        `;
    }
    render_header_native();
}

render_header();