const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
    targetEL = document.querySelector(`#${currentId}`)
    
    const openData = function() {
        targetEL.classList.remove('active');
        overlay.classList.remove('active');
    };
    triggerOpen[i].addEventListener('click', function() {
        targetEL.classList.add('active');
        overlay.classList.add('active');
    });

    targetEL.querySelector('[close-button]').addEventListener('click', openData);

    // overlay.addEventListener('click', openData);
}

//mobile-menu submenu
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => addEventListener('click', function(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    if (this.closest('.has-child').classList != 'active'){
        this.closest('.has-child').classList.toggle('active');
    }
}))



const wrapper = document.querySelectorAll('.wrapper');
const loginLink = document.querySelectorAll('.login-link');
const registerLink = document.querySelector('.register-link');

const riUserline = document.querySelector('.ri-user-line');

const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});


riUserline.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
