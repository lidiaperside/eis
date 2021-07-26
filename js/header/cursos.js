setTimeout(function () {
    var wrapperMenu = document.querySelector('.header__nav__wrapper--menu');
    var botaoCursos = document.querySelector('.header-navegacao-cursos');
    var barraCursos = document.querySelector('.header-navegacao-cursos-lista');
    if (wrapperMenu && botaoCursos && barraCursos && "classList" in document.documentElement) {
        function toggleCourses() {
            wrapperMenu.classList.toggle('header__nav__course--expanded');
            barraCursos.classList.toggle('header-navegacao-cursos-lista--visivel');
            botaoCursos.classList.toggle('header-navegacao-cursos--ativo');
            if (wrapperMenu.classList.contains('header__nav__wrapper--home')) {
                wrapperMenu.classList.toggle('header__nav__course--expanded--home');
                botaoCursos.classList.add('header-navegacao-cursos--home');
                barraCursos.classList.add('lista__backgorund--home')
            }
        }
        function closeCourses() {
            wrapperMenu.classList.remove('header__nav__course--expanded');
            barraCursos.classList.remove('header-navegacao-cursos-lista--visivel');
            botaoCursos.classList.remove('header-navegacao-cursos--ativo');
            if (wrapperMenu.classList.contains('header__nav__wrapper--home')) {
                wrapperMenu.classList.remove('header__nav__course--expanded--home');
                botaoCursos.classList.remove('header-navegacao-cursos--home');
                barraCursos.classList.remove('lista__backgorund--home')
            }
        }
        function cancelPropagation(event) {
            event.stopPropagation()
        }
        function setupCloseCourses() {
            setTimeout(function () {
                document.documentElement.addEventListener('click', closeCourses);
                barraCursos.addEventListener('click', cancelPropagation);
                botaoCursos.addEventListener('click', cancelPropagation)
            },
                0);
            botaoCursos.removeEventListener('click', setupCloseCourses)
        }
        botaoCursos.addEventListener('click', toggleCourses);
        botaoCursos.addEventListener('click', setupCloseCourses)
    }
},
    50)