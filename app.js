const buttonMenu = document.getElementById('btnMenu')
const menu = document.getElementById('menu')
const menuTypes = menu.classList
const anchors = document.querySelectorAll('.hero__menu-a')

//Open-Close Mobile Menu
buttonMenu.addEventListener('click',e => {
    if (menuTypes.contains('active') ) {
        menu.classList.remove('active')
        buttonMenu.classList.remove('hero__btn--close')
    } else {
        buttonMenu.classList.add('hero__btn--close')
        menu.classList.add('active')
        travelAnchors();
    }
})


//Travel Anchors

const travelAnchors = () =>{
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', () =>{
            closeMenu()
        })
        
    }
}

//Close Menu

const closeMenu = () => {
    menu.classList.remove('active')
    buttonMenu.classList.remove('hero__btn--close')
}
