(function () {
    var meta = document.querySelector(".dia-do-programador__banner__contador-wrapper");
    if (meta) {
        var deadline = meta.getAttribute('data-deadline');
        if (deadline) {
            countdown(deadline + 'T23:59:59-03:00');
            meta.classList.remove('dia-do-programador__banner__invisible')
        }
    }
    function countdown(endDate) {
        var dias = document.querySelector(".dia-do-programador__banner__tempo__dias");
        var horas = document.querySelector(".dia-do-programador__banner__tempo__horas");
        var minutos = document.querySelector(".dia-do-programador__banner__tempo__minutos");
        var segundos = document.querySelector(".dia-do-programador__banner__tempo__segundos");
        endDate = new Date(endDate).getTime(); if (isNaN(endDate)) {
            return
        }
        var idSetInterval = setInterval(calculate, 1000);
        calculate();
        function mudaTudo(element, text) {
            element.textContent = text
        }
        function calculate() {
            var days, hours, minutes, seconds;
            var startDate = new Date();
            startDate = startDate.getTime();
            var timeRemaining = parseInt((endDate - startDate) / 1000);
            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);
                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);
                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);
                seconds = parseInt(timeRemaining);
                mudaTudo(dias, days); mudaTudo(horas, ("0" + hours).slice(-2));
                mudaTudo(minutos, ("0" + minutes).slice(-2));
                mudaTudo(segundos, ("0" + seconds).slice(-2))
            } else {
                clearInterval(idSetInterval)
                return
            }
        }
    }
}
    ())