export function displayPorTela(){
    const displayPai = document.getElementById('display-principal');
    const displayFilho1 = document.getElementById('container-display1');
    const displayFilho2 = document.getElementById('container-display2');
    const imgLuffy = document.getElementById('luffyG5');
    const janelaX = window.innerWidth;

    if(janelaX <= 835){
        displayPai.classList.add('flex-col');
        displayFilho1.style.width = '100%';
        //displayFilho2.classList.add('')
        
        imgLuffy.src = 'src/images/luffyG5.jpg';
        imgLuffy.style.height = '400px';
        imgLuffy.style.borderRadius = '25px';
        imgLuffy.classList.add('mx-auto');
        
    }
    
    if(janelaX > 835){
        displayPai.classList.remove('flex-col');
        displayFilho1.style.width = '63%';
        
        imgLuffy.src = 'src/images/luffyG5-2.jpg';
        imgLuffy.style.height = '662px';
        imgLuffy.style.borderRadius = '0px'
        imgLuffy.classList.remove('mx-auto');
    }
}