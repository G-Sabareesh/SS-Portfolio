// for scroll to top button
const scroll_button = document.querySelector('.scroll-button');

scroll_button.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

//Immediately Invoked Function Expression for navigation tab click
(function () {
    //get all anchor tag a and loop one by one
    [...document.querySelectorAll('a')].forEach(nav_tab => {
        nav_tab.addEventListener('click', function () {
            //initially remove active-tab
            document.querySelector('.active-tab').classList.remove('active-tab');
            //add active-tab for current active tab while click
            this.classList.add('active-tab');
            //this is for section while the current tab active at the same time the page is active
            // initially remove the previous current page
            document.querySelector('.active-page').classList.remove('active-page');
            //check if the tab is exist the active that
            if (nav_tab.dataset.id) {
                document.getElementById(nav_tab.dataset.id).classList.add('active-page');
            }
            //this is under testing while click some animation onscroll go to the that page 
            var navLink = document.getElementById(nav_tab.dataset.id)
            if (navLink) {
                navLink.scrollIntoView({ behavior: 'smooth' })
            }
            if (nav_tab.dataset.id !== 'header') {
                //this is working for small screen active
                clickTab();
            }
        });
    })
})();

//on scroll this set of code will process
window.addEventListener('scroll', function () {
    //initialize some variable for vh calculation
    var sections = document.querySelectorAll('section');
    var scrollPosition = window.scrollY;
    var navLinks = document.querySelectorAll('a')

    sections.forEach(function (section) {
        //it take the value where we are currently in and then find the value where we are place in
        var sectionTop = section.offsetTop - 150;
        var sectionBottom = sectionTop + section.offsetHeight;
        //This condition check if teh section top is cross and bottom is not in
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            //the same process as mentioned in click the navigation tab
            navLinks.forEach(link => {
                link.classList.remove('active-tab');
                [...document.querySelectorAll('.active-page')].forEach(active_page => {
                    active_page.classList.remove('active-page');
                    document.getElementById(section.id).classList.add('active-page')
                });
            })
            //if the value is header directly go to the first page else go another page user click
            if (section.id === 'header') {
                document.getElementById(section.id).classList.add('active-tab');
            }
            else if (section.id !== 'header') {
                document.querySelector('li a[href="#' + section.id + '"]').classList.add('active-tab');
            }
        }
    });
});

//this function for active the scroll to top buton
function scroll() {
    if (window.scrollY > 500) {
        scroll_button.classList.add("active");
    }
    else {
        scroll_button.classList.remove("active");
    }
}

//this function will execute if the screen size is smaller
function clickTab() {
    var nav = document.querySelector('nav .menu-icon #menu-button i')
    if ((window.innerWidth < 940)) {
        //the condition are add and remove the navigation menus/tabs
        if (nav.classList[1] == 'fa-bars') {
            document.querySelector('.nav-tabs ul').style.display = 'flex'
            nav.classList.remove('fa-bars')
            nav.classList.add('fa-xmark')
            document.body.style.overflowY = 'hidden'
        }
        else if (nav.classList[1] == 'fa-xmark') {
            document.querySelector('.nav-tabs ul').style.display = 'none'
            nav.classList.add('fa-bars')
            nav.classList.remove('fa-xmark')
            document.body.style.overflowY = 'scroll'
        }
    }
}
//in small screen click any tab or the add and remove hamburger/close icon
document.querySelector('nav .menu-icon #menu-button').addEventListener('click', (e) => {
    e.preventDefault();
    clickTab()
});

//while the screen is resice activate the small screen style
window.addEventListener('resize', () => {
    if (window.innerWidth > 940) {
        document.querySelector('.nav-tabs ul').style.display = 'flex'
    }
    else {
        document.querySelector('.nav-tabs ul').style.display = 'none'
    }
}
);
