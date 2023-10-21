export function controlandoJanela(){
    const janela = document.getElementById('box-window');
    const button = document.getElementById('btn-chapeu');
    
    button.addEventListener('click', function(){
        let visible = false
        const janelaClass = janela.className.split(' ');
        const classe = janelaClass.includes('top-[60em]');
        let ternario = (classe) ? visible = true : visible = false;
        
        if(visible === true){
            janela.classList.remove('top-[60em]');
            janela.classList.add('top-5');
        }
        else{
            janela.classList.remove('top-5');
            janela.classList.add('top-[60em]');
        }
        
        
    });
}


function janelaVisible(){
    const janela = document.getElementById('box-window');
}

function janelaHidden(){
    const janela = document.getElementById('box-window');

}