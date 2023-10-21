export function eventos(){
    const listas = document.querySelectorAll('p.lista');

    listas.forEach(function(list){
        list.addEventListener('click', function(){
            list.classList.toggle('ativo'); // o toggle é um "Liga e Desliga", se não tiver a classe: ele adiciona, se tiver: ele remove
        })
    })
}