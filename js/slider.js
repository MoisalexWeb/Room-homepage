const images = [...document.querySelectorAll('.header__figure')],
	texts = [...document.querySelectorAll('.texts-slide')];

let index = 0;

const changeSlide = (num)=>{
	images[index].classList.remove('slide-active');
	texts[index].classList.remove('slide-active');

	index += num;

	if(index < 0) {
		index = images.length-1;
	}

	else if(index === images.length) {
		index = 0;
	}

	images[index].classList.add('slide-active');
	texts[index].classList.add('slide-active');
}

const slider = () => {
	document.addEventListener('click', (e)=>{
		if(e.target.matches(".header__buttons__btn.prev") ||
			e.target.matches("#prev-btn")) {
			changeSlide(-1);
		}

		else if(e.target.matches(".header__buttons__btn.next") ||
			e.target.matches("#next-btn")) {
			changeSlide(1);
		}
	})
}

document.addEventListener('DOMContentLoaded', slider)