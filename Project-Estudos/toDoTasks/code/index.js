import { eventos } from "./eventos";

const containerList = document.getElementById('container-list');
const inputConteudo = document.getElementById('conteudo');
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');
const elemento = documento.getElementById('.lista');


btnAdd.addEventListener('click', function(){
    containerList.innerHTML += `<p class="lista">${inputConteudo.value}</p>`;
})

btnRemove.addEventListener('click', function(){
    const elementoAtivo = document.querySelector('.lista.ativo');

})

elemento.addEventListener('click', function(){
    elemento.classList.toggle('ativo');
})