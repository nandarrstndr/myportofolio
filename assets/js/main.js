/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

// Menu Show
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

// Menu Hidden
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));
/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper('.projects_container', {
	loop: true,
	spaceBetween: 24,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},

	breakpoints: {
		1200: {
			slidesPerView: 2,
			spaceBetween: -56,
		},
	},
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper('.testimonial_container', {
	grabCursor: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
	contactName = document.getElementById('contact-name'),
	contactEmail = document.getElementById('contact-email'),
	contactProjects = document.getElementById('contact-project'),
	contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
	e.preventDefault();

	// Check if the field has a value
	if (contactName.value === '' || contactEmail.value === '' || contactProjects.value === '') {
		// Add and Remove Color
		contactMessage.classList.remove('color-blue');
		contactMessage.classList.add('color-red');

		// Show Message
		contactMessage.textContent = 'Write all the input fields ✍️';
	} else {
		// services ID - templateID - #form -  publickey
		emailjs.sendForm('service_s2anvzc', 'template_udzwhye', '#contact-form', 'BoMi_xrH2hzY8qBDD').then(
			() => {
				// Show message
				contactMessage.classList.add('color-blue');
				contactMessage.textContent = 'Message sent ✅';

				// Remove
				setTimeout(() => {
					contactMessage.textContent = '';
				}, 5000);
			},
			(error) => {
				alert('OOPS! SOMETHING HAS FAILED...!', error);
			}
		);

		// To Clear Input Field
		contactName.value = '';
		contactEmail.value = '';
		contactProjects.value = '';
	}
};
contactForm.addEventListener('submit', sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link');
		} else {
			sectionsClass.classList.remove('active-link');
		}
	});
};

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up');
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Validating dark theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line');

// Validate if the user previously chose a topic
if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
	themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Active / deactive the theme
themeButton.addEventListener('click', () => {
	// add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	// we save the theme and the current icon
	localStorage.setItem('selectedTheme', getCurrentTheme());
	localStorage.setItem('selectedIcon', getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
	const header = document.getElementById('header');

	this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	reset: true,
});

sr.reveal('.home_data, .projects_container, .testimonial_container, .footer_container');
sr.reveal('.home_info div', { delay: 600, origin: 'bottom', interval: 100 });
sr.reveal('.skills_content:nth-child(1), .contact_content:nth-child(1)', { origin: 'left' });
sr.reveal('.skills_content:nth-child(2), .contact_content:nth-child(2)', { origin: 'right' });
sr.reveal('.qualification_content, .services_card', { interval: 100 });
