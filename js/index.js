// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
function render_header() {
    mainPage.innerHTML += `
    <div id="header"></div>
    `;
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

// RENDER MAIN SECTION
function render_main_section () {
    mainPage.innerHTML += `
    <section></section>
    `
}

// RENDER FOOTER
const mainFooter = document.querySelector('#mainFooter');
function render_footer() {
    mainFooter.innerHTML += `
    <div id="footer"></div>
    `;
    const contactContainer = document.querySelector('#footer');
    function render_contact_container() {
        contactContainer.innerHTML += `
        <div class="contact__container">CONTACT INFORMATION DIV</div>
        <div id="copyrightInfo">Copyright | MindX | C4EJS126</div>
        `;
    }
    render_contact_container();
}
render_footer();


