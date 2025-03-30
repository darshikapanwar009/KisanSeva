// Search Toggle
let searchProduct = document.querySelector('.Searching');
document.querySelector('#search-btn').onclick = () => {
    searchProduct.classList.toggle('active');
    shopCart.classList.remove('active');
    Login.classList.remove('active');
    Mobile.classList.remove('active');
}

// Cart Toggle
let shopCart = document.querySelector('.Cart');
document.querySelector('#cart-btn').onclick = () => {
    shopCart.classList.toggle('active');
    searchProduct.classList.remove('active');
    Login.classList.remove('active');
    Mobile.classList.remove('active');
}

// Login Toggle
let Login = document.querySelector('.Login-Page');
document.querySelector('#login-btn').onclick = () => {
    Login.classList.toggle('active');
    searchProduct.classList.remove('active');
    shopCart.classList.remove('active');
    Mobile.classList.remove('active');
}

// Mobile Menu Toggle
let Mobile = document.querySelector('.Navbar');
document.querySelector('#menu-btn').onclick = () => {
    Mobile.classList.toggle('active');
    searchProduct.classList.remove('active');
    shopCart.classList.remove('active');
    Login.classList.remove('active');
}

// Remove Active Classes on Scroll
window.onscroll = () => {
    searchProduct.classList.remove('active');
    shopCart.classList.remove('active');
    Login.classList.remove('active');
    Mobile.classList.remove('active');
}

// Product Slider
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 650,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidePreview: 1,
        },
        768: {
            slidePreview: 2,
        },
        1020: {
            slidePreview: 3,
        },
    },
});

