const dropMenu = (opt) => {
    const menuProduct = document.getElementById('menu-product');
    const iconProduct = document.getElementById('icon-product');
    const menuCompany = document.getElementById('menu-company');
    const iconCompany = document.getElementById('icon-company');
    const menuConnect = document.getElementById('menu-connect');
    const iconConnect = document.getElementById('icon-connect');

    switch (opt) {
        case 'product':
            if (menuProduct.style.display === 'flex') {
                menuProduct.style.display = 'none';
                iconProduct.style.classList.remove('rotate-icon');
            } else {
                menuProduct.style.display = 'flex';
                iconProduct.style.classList.add('rotate-icon');
                menuCompany.style.display = 'none';
                menuConnect.style.display = 'none';
            }
            break;
        case 'company':
            (menuCompany.style.display === 'flex') ? menuCompany.style.display = 'none' : menuCompany.style.display = 'flex';
            menuProduct.style.display = 'none';
            menuConnect.style.display = 'none';
            break;
        case 'connect':
            (menuConnect.style.display === 'flex') ? menuConnect.style.display = 'none' : menuConnect.style.display = 'flex';
            menuProduct.style.display = 'none';
            menuCompany.style.display = 'none'
            break;
    }
}