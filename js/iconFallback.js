window.addEventListener('error',({
    target:element})=>{const{
        dataset,src}=element;
        if(dataset===undefined||dataset.changedSrc!==undefined&&dataset.changedSrc===!0){
            return
        }
const assetsUrl=/((http|https):\/\/www.eis.com.br\/|\/)assets\/(api|img)\/.*/;
if(src.match(assetsUrl)){
    element.src='';
    dataset.changedSrc=!0}},!0)