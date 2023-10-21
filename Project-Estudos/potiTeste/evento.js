const htmlLogo = document.getElementById('html-logo');
const cssLogo = document.getElementById('css-logo');
const tailwindLogo = document.getElementById('tail-logo');
const jsLogo = document.getElementById('js-logo');
const reactLogo = document.getElementById('react-logo');
const nextLogo = document.getElementById('next-logo');
const opacidadeFraca = '35%';


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


    // MOUSE ENTER
htmlLogo.addEventListener('mouseenter', function(){
    htmlLogo.style.opacity = '100%';
    cssLogo.style.opacity = opacidadeFraca;
    tailwindLogo.style.opacity = opacidadeFraca;
    jsLogo.style.opacity = opacidadeFraca;
    reactLogo.style.opacity = opacidadeFraca;
    nextLogo.style.opacity = opacidadeFraca;
})
cssLogo.addEventListener('mouseenter', function(){
    htmlLogo.style.opacity = opacidadeFraca;
    cssLogo.style.opacity = '100%';
    tailwindLogo.style.opacity = opacidadeFraca;
    jsLogo.style.opacity = opacidadeFraca;
    reactLogo.style.opacity = opacidadeFraca;
    nextLogo.style.opacity = opacidadeFraca;
})
tailwindLogo.addEventListener('mouseenter', function(){
    htmlLogo.style.opacity = opacidadeFraca;
    cssLogo.style.opacity = opacidadeFraca;
    tailwindLogo.style.opacity = '100%';
    jsLogo.style.opacity = opacidadeFraca;
    reactLogo.style.opacity = opacidadeFraca;
    nextLogo.style.opacity = opacidadeFraca;
})
jsLogo.addEventListener('mouseenter', function(){
    htmlLogo.style.opacity = opacidadeFraca;
    cssLogo.style.opacity = opacidadeFraca;
    tailwindLogo.style.opacity = opacidadeFraca;
    jsLogo.style.opacity = '100%';
    reactLogo.style.opacity = opacidadeFraca;
    nextLogo.style.opacity = opacidadeFraca;
})
reactLogo.addEventListener('mouseenter', function(){
    htmlLogo.style.opacity = opacidadeFraca;
    cssLogo.style.opacity = opacidadeFraca;
    tailwindLogo.style.opacity = opacidadeFraca;
    jsLogo.style.opacity = opacidadeFraca;
    reactLogo.style.opacity = '100%';
    nextLogo.style.opacity = opacidadeFraca;
})
nextLogo.addEventListener('mouseenter', function(){
    htmlLogo.style.opacity = opacidadeFraca;
    cssLogo.style.opacity = opacidadeFraca;
    tailwindLogo.style.opacity = opacidadeFraca;
    jsLogo.style.opacity = opacidadeFraca;
    reactLogo.style.opacity = opacidadeFraca;
    nextLogo.style.opacity = '100%';
})


// MOUSE OUT
htmlLogo.addEventListener('mouseout', function(){
    htmlLogo.style.opacity = '100%';
    cssLogo.style.opacity = '100%';
    tailwindLogo.style.opacity = '100%';
    jsLogo.style.opacity = '100%';
    reactLogo.style.opacity = '100%';
    nextLogo.style.opacity = '100%';
})
cssLogo.addEventListener('mouseout', function(){
    htmlLogo.style.opacity = '100%';
    cssLogo.style.opacity = '100%';
    tailwindLogo.style.opacity = '100%';
    jsLogo.style.opacity = '100%';
    reactLogo.style.opacity = '100%';
    nextLogo.style.opacity = '100%';
})
tailwindLogo.addEventListener('mouseout', function(){
    htmlLogo.style.opacity = '100%';
    cssLogo.style.opacity = '100%';
    tailwindLogo.style.opacity = '100%';
    jsLogo.style.opacity = '100%';
    reactLogo.style.opacity = '100%';
    nextLogo.style.opacity = '100%';
})
jsLogo.addEventListener('mouseout', function(){
    htmlLogo.style.opacity = '100%';
    cssLogo.style.opacity = '100%';
    tailwindLogo.style.opacity = '100%';
    jsLogo.style.opacity = '100%';
    reactLogo.style.opacity = '100%';
    nextLogo.style.opacity = '100%';
})
reactLogo.addEventListener('mouseout', function(){
    htmlLogo.style.opacity = '100%';
    cssLogo.style.opacity = '100%';
    tailwindLogo.style.opacity = '100%';
    jsLogo.style.opacity = '100%';
    reactLogo.style.opacity = '100%';
    nextLogo.style.opacity = '100%';
})
nextLogo.addEventListener('mouseout', function(){
    htmlLogo.style.opacity = '100%';
    cssLogo.style.opacity = '100%';
    tailwindLogo.style.opacity = '100%';
    jsLogo.style.opacity = '100%';
    reactLogo.style.opacity = '100%';
    nextLogo.style.opacity = '100%';
})
