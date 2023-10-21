
export function backgroundControl(){
    const fig = document.getElementById('fig');
    const back = document.getElementById('background');
    const main = document.getElementById('conteudo-principal');
    const foto = document.getElementById('estudante');
    
    fig.addEventListener('click', function(){

        if(fig.classList[2] === 'fa-moon'){
            fig.classList.remove('fa-moon');
            fig.classList.add('fa-sun');

            back.style.transition = '0.5s';
            main.style.transition = '0.5s';
            back.style.backgroundColor = '#101010';
            main.style.color = 'white';
            fig.style.color = 'white';

            foto.src = 'images/estudante-darkMode.png';
        }
        else{
            fig.classList.remove('fa-sun');
            fig.classList.add('fa-moon');

            back.style.transition = '0.5s';
            main.style.transition = '0.5s';
            back.style.backgroundColor = 'white'
            main.style.color = 'black';
            fig.style.color = 'black';

            foto.src = 'images/estudante.png';
        }
    })
}