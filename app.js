function app () {

    //nav bar slides when the burger menu is clicked
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

    //scrolls to the correct section when clicked on the nav-items
    const scrollToSection = () => {
        const links = document.querySelectorAll("nav ul li a");

        for (const link of links){
        link.addEventListener('click', function(e){
            e.preventDefault();

            const section = document.querySelector(event.target.hash);

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
        }
    }
    scrollToSection();

}

app();