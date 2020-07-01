const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');

        burger.addEventListener('click', () => {
            //toggle nav-active
            nav.classList.toggle('nav-active');
            //Burger Animation 
            burger.classList.toggle('cross');
        })
    }


navSlide();