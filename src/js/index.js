const iconCompany = document.getElementById('icon-company');
const menuConnect = document.getElementById('menu-connect');
const iconConnect = document.getElementById('icon-connect');

const handleClickMenuMobile = () => {
    iconCompany.src('../../assets/icon/icon-arrow-dark.svg');

    const menuMobile = document.getElementById('navbar');
    const buttonRightMenu = document.getElementById('box-right');
    const iconMenuMobile = document.getElementById('menu-mobile');
    if (menuMobile.style.display === 'flex') {
        menuMobile.style.display = 'none';
        buttonRightMenu.display = 'flex';
        iconMenuMobile.src = 'assets/icon/icon-hamburger.svg';
    } else {
        menuMobile.style.display = 'flex';
        buttonRightMenu.display = 'none';
        iconMenuMobile.src = 'assets/icon/icon-close.svg';
    }
}

const dropMenu = (opt) => {
    const menuProduct = document.getElementById('menu-product');
    const iconProduct = document.getElementById('icon-product');
    const menuCompany = document.getElementById('menu-company');

    switch (opt) {
        case 'product':
            if (menuProduct.style.display === 'flex') {
                menuProduct.style.display = 'none';
                iconProduct.classList.remove('rotate-icon');
            } else {
                menuProduct.style.display = 'flex';
                iconProduct.classList.add('rotate-icon');
                iconCompany.classList.remove('rotate-icon');
                iconConnect.classList.remove('rotate-icon');
                menuCompany.style.display = 'none';
                menuConnect.style.display = 'none';
            }
            break;
        case 'company':
            if (menuCompany.style.display === 'flex') {
                menuCompany.style.display = 'none';
                iconCompany.classList.remove('rotate-icon');
            } else {
                menuCompany.style.display = 'flex';
                iconCompany.classList.add('rotate-icon');
                iconProduct.classList.remove('rotate-icon');
                iconConnect.classList.remove('rotate-icon');
                menuProduct.style.display = 'none';
                menuConnect.style.display = 'none';
            }
            break;
        case 'connect':
            if (menuConnect.style.display === 'flex') {
                menuConnect.style.display = 'none';
                iconConnect.classList.remove('rotate-icon');
            } else {
                menuConnect.style.display = 'flex';
                iconConnect.classList.add('rotate-icon');
                iconProduct.classList.remove('rotate-icon');
                iconCompany.classList.remove('rotate-icon');
                menuProduct.style.display = 'none';
                menuCompany.style.display = 'none'
            }
    }
}