setTimeout(function () {
    function suportaTransform() {
        var el = document.createElement('div');
        return el.style.transform !== undefined || el.style.WebkitTransform !== undefined
    }
    if (!suportaTransform()) {
        document.documentElement.className += ' no-transform'
    }
    if (navigator.userAgent.match(/MSIE [6789]\./)) {
        document.body.insertAdjacentHTML('afterbegin', '<div class="old-browser">Desculpe, mas a gente não suporta mais esse navegador então você pode ter problemas navegando aqui.<br>Qualquer coisa liga pra gente em (83) 1234-5678 ou manda um email: contato@eis.com.br</div>')
    }
}, 0)