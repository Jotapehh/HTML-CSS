export function controleDeTela(){
    const tela = document.getElementById('tela-links');
    let emControlAbrir = 0;
    let emControlFechar = -20;
    
    const btnFechar = document.getElementById('btn-fechar').addEventListener('click', function(){
        tela.classList.remove(`right-[0em]`);
        tela.classList.add(`right-[-22em]`);
    });
    const btnAbrir = document.getElementById('btn-abrir').addEventListener('click', function(){
        tela.classList.remove(`right-[-22em]`);
        tela.classList.add(`right-[0em]`);
    });
}

function abrirTela(){
}

function fecharTela(){
}