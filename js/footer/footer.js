var lis=document.querySelectorAll('.curso-conteudo-detalhado-item');
lis.forEach(function(li){
    li.addEventListener('click',function(event){
        event.currentTarget.classList.toggle('curso-conteudo-detalhado-item--active')
    }
    )
}
)