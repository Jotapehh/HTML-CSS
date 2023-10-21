export function verificarArquivoImage(){

    const fileInput = document.querySelector('#entrada');
    const previaDaImagem = document.querySelector('#prev-img');
    
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', (event) => {
            previaDaImagem.src = event.target.result;

        });
        reader.readAsDataURL(file);
    });
}

function etilizandoPrevia(){
    const previa = document.querySelector('#renderImg');
    const classesDeImagem = [
        'w-64',
        'rounded-lg'
    ];

    for(classe of classesDeImagem){
        previa.classList.add(classe);
    }
}