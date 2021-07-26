window.addEventListener("load",function(){
    var tooltipButtons=document.querySelectorAll('.planos-pagamento__legenda-tooltip');
    var tooltipDescriptions=document.querySelectorAll('.planos-pagamento__legenda-descricao');
    setupButtons(tooltipButtons,tooltipDescriptions);
    setupDocument(tooltipButtons,tooltipDescriptions)
});
function setupButtons(buttons,descriptions){
    forEach(buttons,function(button){
        button.addEventListener('click',function(e){
            var target=e.target;
            if(target.classList.contains('planos-pagamento__legenda-tooltip--ativo')){
                closeTooltips(buttons)
            }else{
                closeTooltips(buttons);
                target.classList.add('planos-pagamento__legenda-tooltip--ativo')
            }
        })
    });
    forEach(descriptions,function(description){
        description.addEventListener('click',function(e){
            e.stopPropagation()}
            )}
        )}
function setupDocument(buttons,descriptions){
    document.documentElement.addEventListener('click',function(){
        closeTooltips(buttons)}
        );
        forEach(buttons,function(button){
            button.addEventListener('click',function(e){
                e.stopPropagation()
            })
        });
        forEach(descriptions,function(description){
            description.addEventListener('click',function(){
                closeTooltips(buttons)}
                )}
                )}
function closeTooltips(buttons){
    forEach(buttons,function(button){
        button.classList.remove('planos-pagamento__legenda-tooltip--ativo')}
        )}
function forEach(elementList,action){
    for(var i=0;i<elementList.length;i++){
        var element=elementList[i];action(element)}
    }