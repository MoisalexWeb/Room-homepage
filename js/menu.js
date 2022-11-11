const nav = document.querySelector('.nav'),
	menu = document.querySelector('.nav__menu');

const changeNavColor = ()=>{
	if (window.scrollY >= 180) nav.classList.add('nav-2');
    else nav.classList.remove('nav-2');
}

document.addEventListener('click', (e) => {
    if (e.target.matches(".nav__hamburger")) {
    	nav.style.transition = "transform 0.4s ease";
        nav.classList.toggle('active');
    }
    else if (e.target.matches(".nav__menu-link") || e.target.matches(".dark-background")) {
    	nav.classList.remove('active');
    }
})

window.addEventListener('scroll', () => {
    changeNavColor();
})


window.addEventListener('resize', () => {
    if(window.innerWidth >= 768) {
    	nav.classList.remove('active')
    	menu.removeAttribute('style');
    }
})

document.addEventListener('DOMContentLoaded', changeNavColor)