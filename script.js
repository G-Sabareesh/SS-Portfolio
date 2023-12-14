(function () {
    [...document.querySelectorAll('a')].forEach(nav_tab => {
        nav_tab.addEventListener('click', function () {
            // console.log(this, nav_tab)
            document.querySelector('.active-tab').classList.remove('active-tab');
            this.classList.add('active-tab');
            document.querySelector('.active-page').classList.remove('active-page');
            if (nav_tab.dataset.id) {
                document.getElementById(nav_tab.dataset.id).classList.add('active-page');
            }
            // console.log(nav_tab.dataset.id)
            var navLink = document.getElementById(nav_tab.dataset.id)
            if (navLink) {
                navLink.scrollIntoView({ behavior: 'smooth' })
            }
            if (nav_tab.dataset.id !== 'header') {
                clickTab();
            }
        });
    })
})();

window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section');
    var scrollPosition = window.scrollY;
    var navLinks = document.querySelectorAll('a')

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop - 150;
        var sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // section.classList.add('active-page');
            navLinks.forEach(link => {
                link.classList.remove('active-tab');
                [...document.querySelectorAll('.active-page')].forEach(active_page => {
                    active_page.classList.remove('active-page');
                    document.getElementById(section.id).classList.add('active-page')
                });
            })
            if (section.id !== 'header') {
                // document.getElementById(section.id).classList.add('active-tab');
                document.querySelector('li a[href="#' + section.id + '"]').classList.add('active-tab');
            }
        }
    });
});

function clickTab() {
    var nav = document.querySelector('nav .menu-icon #menu-button i')
    if ((window.innerWidth < 940)) {
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
document.querySelector('nav .menu-icon #menu-button').addEventListener('click', (e) => {
    e.preventDefault();
    clickTab()
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 940) {
        document.querySelector('.nav-tabs ul').style.display = 'flex'
    }
    else {
        document.querySelector('.nav-tabs ul').style.display = 'none'
    }
}
);
