// RENDER HEADER
const mainPage = document.querySelector('#mainPage');
function render_header() {
    mainPage.innerHTML += `
    <div id="header"></div>
    `

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
        `
    }
    render_header_native();
}
render_header();

// RENDER MAIN SECTION
function render_main_section () {
    mainPage.innerHTML += `
    <div id="section__container"></div>
    `

    // RENDER SECTION ITEMS

    // SECTION 1: THỦY TIÊN
    const section1 = document.querySelector('#section__container');
    function render_section_1() {
        section1.innerHTML += `
        <section id="" class="section__1">Section 1</section>
        `
    }
    render_section_1();

    // SECTION 2: TRUNG
    const section2 = document.querySelector('#section__container');
    function render_section_2() {
        section2.innerHTML += `
        <section id="" class="section__2">Section 2</section>
        `
    }
    render_section_2();

    // SECTION 3: ĐÔNG
    const section3 = document.querySelector('#section__container');
    function render_section_3() {
        section3.innerHTML += `
        <section id="" class="section__3">Section 3</section>
        `
    }
    render_section_3();

    // SECTION 4: TUẤN ANH
    const section4 = document.querySelector('#section__container');
    function render_section_4() {
        section4.innerHTML += `
        <section id="" class="section__4"></section>
        `
    }
    render_section_4();

    // RENDER SECTION 4 ITEMS
    const section4Item1 = document.querySelector('.section__4');
    function section4__container1() {
        section4Item1.innerHTML += `
        <div id="section4__container1" class=""></div>
        `
    }
    section4__container1();

    // CREATING PRODUCT ARRAY OBJECTS
    const handbagProductList = [
        {
            name: "KAMPUS TIGER BACKPACK",
            url: "#",
            image: "./images/section 4/KAMPUS TIGER BACKPACK.jpg",
            price: "$265",
            gender: "MALE",
            color: "BLACK",
        },
        {
            name: "KENZO SPORT BELT BAG",
            url: "#",
            image: "./images/section 4/KENZO SPORT BELT BAG.jpg",
            price: "$275",
            gender: "MALE",
            color: "BLACK",
        },
        {
            name: "KENZO Sport backpack with strap",
            url: "#",
            image: "./images/section 4/KENZO Sport backpack with strap.jpg",
            price: "$295",
            gender: "MALE",
            color: "WHITE",
        },
        {
            name: "KENZO Sport tote bag",
            url: "#",
            image: "./images/section 4/KENZO Sport tote bag.jpg",
            price: "$340",
            gender: "MALE",
            color: "BLACK",
        },
    ]

    const handbagProduct = document.getElementById('section4__container1');

    function render_section4_product () {
        for (let product of handbagProductList) {
            document.getElementById("section4__container1").innerHTML += `
                <div class="product__item">
                    <div class="product__image">
                        <img src="` + product.image + `" alt="">
                    </div>
                    <div class="product__info">
                        <div class="product__name">
                            <a href="">KAMPUS TIGER BACKPACK</a>
                        </div>
                        <div class="product__price">` + product.price + `</div>
                        <div class="product__color">` + product.color + `</div>
                    </div>
                </div>
            `
        }
    }
    render_section4_product();
 


}
render_main_section();

// RENDER FOOTER
const mainFooter = document.querySelector('#mainFooter');
function render_footer() {
    mainFooter.innerHTML += `
    <div id="footer"></div>
    `
    const contactContainer = document.querySelector('#footer');
    function render_contact_container() {
        contactContainer.innerHTML += `
        <div class="contact__container">CONTACT INFORMATION DIV</div>
        <div id="copyrightInfo">Copyright | MindX | C4EJS126</div>
        `
    }
    render_contact_container();
}
render_footer();
