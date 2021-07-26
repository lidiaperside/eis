setTimeout(
    function () {
        var body = document.body;
        var barraBusca = document.querySelector('.header-barraBusca');
        var campoBusca = document.getElementById('header-barraBusca-form-campoBusca');
        var botaoBusca = document.querySelector('.header-utilitario-busca');
        if (botaoBusca && "classList" in document.documentElement) {
            function toggleSearch(event) {
                body.classList.toggle('header-barraBusca--visivel');
                campoBusca.focus();
                event.preventDefault()
            }
            function closeSearch() {
                body.classList.remove('header-barraBusca--visivel')
            }
            function cancelPropagation(event) {
                event.stopPropagation()
            }
            function setupCloseSearch() {
                setTimeout(function () {
                    document.documentElement.addEventListener('click', closeSearch);
                    barraBusca.addEventListener('click', cancelPropagation);
                    botaoBusca.addEventListener('click', cancelPropagation)
                }
                    , 0);
                botaoBusca.removeEventListener('click', setupCloseSearch)
            }
            botaoBusca.addEventListener('click', toggleSearch);
            botaoBusca.addEventListener('click', setupCloseSearch)
        }
    }
    , 50)