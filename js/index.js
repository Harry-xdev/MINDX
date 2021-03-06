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
        <a id="user__container" href="#">Login</a><a href="#">Register</a>
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

    // SECTION 1: THỦY TIÊN
    const section1 = document.querySelector('#section__container');
    function render_section_1() {
        section1.innerHTML += `
        <section id="" class="section__1"> Fashion
        <div>
        <button  type="button"  onclick="location.href='./Fashion.html';"> find more  </button>
        </div>

        </section>
        
        `;
    };
    render_section_1();




    // SECTION 2: TRUNG
    const section2 = document.querySelector('#section__container');
    function render_section_2() {
        section2.innerHTML += `
        <section id="" class="section__2">Section 2</section>
        `;
    };
    render_section_2();

    // SECTION 3: ĐÔNG
    const section3 = document.querySelector('#section__container');
    function render_section_3() {
        section3.innerHTML += `
        <section id="" class="section__3">Section 3</section>
        `;
    };
    render_section_3();

    // SECTION 4: TUẤN ANH
    const section4 = document.querySelector('#section__container');
    function render_section_4() {
        section4.innerHTML += `
        <section id="" class="section__4"></section>
        `;
    };
    render_section_4();

    // RENDER SECTION 4 ITEMS
    const section4Item1 = document.querySelector('.section__4');
    function section4__container1() {
        section4Item1.innerHTML += `
        <div id="section4__container1" class="">Handbag</div>
        `;
    };
    section4__container1();

    const section41item = document.querySelector('#section4__container1');
    function section4__container1_item() {
        section41item.innerHTML += `
        <div id="" class="handbag__product">Products</div>
        `;
    };
    section4__container1_item();

    // CREATING PRODUCT ARRAY OBJECTS
    const handbagProductList = [
        {
            name: "KAMPUS TIGER BACKPACK",
            price: "$265",
            gender: "MALE",
            color: "BLACK",
        },
        {
            name: "KENZO SPORT BELT BAG",
            price: "$275",
            gender: "MALE",
            color: "BLACK",
        },
        {
            name: "KENZO Sport backpack with strap",
            price: "$295",
            gender: "MALE",
            color: "WHITE",
        },
        {
            name: "KENZO Sport tote bag",
            price: "$340",
            gender: "MALE",
            color: "BLACK",
        },
    ];


    
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


