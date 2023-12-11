(function () {
    [...document.querySelectorAll('a')].forEach(nav_tab => {
        nav_tab.addEventListener('click', function () {
            document.querySelector('.active-tab').classList.remove('active-tab');
            this.classList.add('active-tab');
        });
    })
})();

window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section');
    var scrollPosition = window.scrollY;
    var navLinks = document.querySelectorAll('a')

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop - 50;
        var sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            section.classList.add('active-page');
            navLinks.forEach(link => {
                link.classList.remove('active-tab')
            })
            if (section.id !== 'header') {
                document.querySelector('li a[href="#' + section.id + '"]').classList.add('active-tab')
            }
        }
    });
});

document.querySelector('nav .menu-icon #menu-button i').addEventListener('click', (e) => {
    e.preventDefault();
    var nav = document.querySelector('nav .menu-icon #menu-button i')
    if (nav.classList[1] == 'fa-bars') {
        document.querySelector('.nav-tabs ul').style.display = 'flex'
        nav.classList.remove('fa-bars')
        nav.classList.add('fa-xmark')
    }
    else {
        document.querySelector('.nav-tabs ul').style.display = 'none'
        nav.classList.add('fa-bars')
        nav.classList.remove('fa-xmark')
    }

});
