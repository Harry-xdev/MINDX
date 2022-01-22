// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
function render_header() {
    mainPage.innerHTML += `
    <div id="header"></div>
    `;

    // RENDER HEADER NATIVE BUTTON - USER LOGIN
    const headerNative = document.querySelector('#header');
    function render_header_native() {
        headerNative.innerHTML += `
        <a id="logo__main" class="" href="#">TEAM 1 - GROUP 6.</a>
        <a id="" class="native" href="#">Men</a>
        <a class="native" href="#">Women</a>
        <a class="native" href="#">About us</a>
        <a class="native" href="#">Wishlist</a>
        <span id="user__container"><a href="#">Login</a><a href="#">Register</a></span>
        `;
    };
    render_header_native();
};
render_header();

// RENDER MAIN SECTION
function render_main_section () {
    mainPage.innerHTML += `
    <div id="section__container"></div>
    `;

    // RENDER SECTION ITEMS
    const section1 = document.querySelector('#section__container');
    function render_section_1() {
        section1.innerHTML += `
        <section>Section 1</section>
        `;
    };
    render_section_1();

    const section2 = document.querySelector('#section__container');
    function render_section_2() {
        section2.innerHTML += `
        <section>Section 2</section>
        `;
    };
    render_section_2();
    
};
render_main_section();

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
    };
    render_contact_container();
};
render_footer();


