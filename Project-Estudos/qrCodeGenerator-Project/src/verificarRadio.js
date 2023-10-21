

const classesParaAdicionar = [];

function setImage(){
    const div = document.getElementById('image-box');
    const input = document.getElementById('entrada');
    const p = document.getElementById('msg-image');
    const prevImg = document.getElementById('prev-img');
    const classesParaAdd = ['hover:cursor-pointer', 'w-64', 'h-16', 'sm:w-[50em]', 'sm:h-64'];
    const classDiv = ['bg-slate-50', 'items-center', 'w-64', 'h-16', 'sm:w-[50em]', 'sm:h-64', 'sticky'];

    input.type = 'file';
    input.style.opacity = '0%';
    p.style.visibility = 'visible';
    prevImg.alt = 'previa da imagem selecionada';

    for(const adicionar of classesParaAdd){
        input.classList.add(adicionar);
    }
    for(const add of classDiv){
        div.classList.add(add);
    }
   
}

function setLink(){
    const div = document.getElementById('image-box');
    const input = document.getElementById('entrada');
    const p = document.getElementById('msg-image');
    const prevImg = document.getElementById('prev-img');
    const classesParaRemover = ['hover:cursor-pointer', 'px-2', 'pt-0', 'w-64', 'h-16', 'h-20', 'overflow-y-auto', 'sm:w-[50em]', 'sm:h-64'];
    const classDiv = ['bg-slate-50', 'items-center', 'w-64', 'h-16', 'sm:w-[50em]', 'sm:h-64', 'sticky'];
    
    input.type = 'url';
    input.placeholder = 'https://exemplo.com.br'
    input.style.opacity = '100%';
    p.style.visibility = 'hidden';
    prevImg.src = undefined;
    prevImg.alt = '';


    for(const remover of classesParaRemover){
        input.classList.remove(remover);
    }
    for(const remover of classDiv){
        div.classList.remove(remover)
    }

}

function setEmail(){
    const div = document.getElementById('image-box');
    const input = document.getElementById('entrada');
    const p = document.getElementById('msg-image');
    const prevImg = document.getElementById('prev-img');
    const classesParaRemover = ['hover:cursor-pointer', 'px-2', 'pt-0', 'w-64', 'h-16', 'h-20', 'overflow-y-auto', 'sm:w-[50em]', 'sm:h-64'];
    const classDiv = ['bg-slate-50', 'items-center', 'w-64', 'h-16', 'sm:w-[50em]', 'sm:h-64', 'sticky'];
    
    input.type = 'email';
    input.placeholder = 'exemplo@gmail.com'
    input.style.opacity = '100%';
    p.style.visibility = 'hidden';
    prevImg.src = undefined;
    prevImg.alt = '';


    for(const remover of classesParaRemover){
        input.classList.remove(remover);
    }
    for(const remover of classDiv){
        div.classList.remove(remover)
    }

}

function setTel(){
    const div = document.getElementById('image-box');
    const input = document.getElementById('entrada');
    const p = document.getElementById('msg-image');
    const prevImg = document.getElementById('prev-img');
    const classesParaRemover = ['hover:cursor-pointer', 'px-2', 'pt-0', 'w-64', 'h-16', 'h-20', 'overflow-y-auto', 'sm:w-[50em]', 'sm:h-64'];
    const classDiv = ['bg-slate-50', 'items-center', 'w-64', 'h-16', 'sm:w-[50em]', 'sm:h-64', 'sticky'];
    
    input.type = 'tel';
    input.placeholder = '(99)90000-1111'
    input.style.opacity = '100%';
    p.style.visibility = 'hidden';
    prevImg.src = undefined;
    prevImg.alt = '';


    for(const remover of classesParaRemover){
        input.classList.remove(remover);
    }
    for(const remover of classDiv){
        div.classList.remove(remover)
    }

}

export function checkRadio(){
    

    const rImage = document.getElementById('image-r');
    const rLink = document.getElementById('link-r');
    const rEmail = document.getElementById('email-r');
    const rTel = document.getElementById('tel-r');

    rImage.addEventListener('click', setImage);
    rLink.addEventListener('click', setLink);
    rEmail.addEventListener('click', setEmail);
    rTel.addEventListener('click', setTel);
    
}