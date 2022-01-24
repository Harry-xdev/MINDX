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
        <a id="" class="native" href="#">FASHION</a>
        <a class="native" href="#">WATCHES</a>
        <a class="native" href="#">SHOES</a>
        <a class="native" href="#">BAGS</a>
        <a id="user__container" href="#"> 
        <span> About Us </span>
        <span> Login </span>
        <span> Register </span>
        </a>
        
        `;
    };
    render_header_native();
};
render_header();


//Render Fashion page
function main_page_fashion() {
    mainPage.innerHTML += `
    <div id="mainPageFashion"> </div>
    `;

    // section Men's  Fashion, section Women's  Fashion
        const mainPageFashion = document.querySelector('#mainPageFashion');
        function fashion_sections() {
            mainPageFashion.innerHTML += `
            <video  controls autoplay loop="" playsinline=""> <source
            src = "https://www.dior.com/couture/var/dior/storage/original/video/0fdbdfb57a18fb353efd235ba5df5de1.mp4"> 
            poster="https://www.dior.com/couture/var/dior/storage/images/30536758/25-eng-GB/fashion-show-banner2_1440_1200.jpg"</video>
            <div id=fashionSelections>
            <span id="womenFashion" > <img id=imgWomenFashion
            src = "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1920/FSH-1639756228960-22pplpdrtw00header.jpg"
            /> WOMEN
            </span>
            <span id="menFashion"> MEN <img id=imgMenFashion
            src ="
            https://www.dior.com/couture/var/dior/storage/images/horizon/mens-fashion/man/block-cover-sacai-cover/block-cover-item-cover/28730917-15-eng-GB/cover_1440_1200.jpg" />
            
            </span>
            <div>
            `;
        }
        fashion_sections()
}

main_page_fashion();


















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
