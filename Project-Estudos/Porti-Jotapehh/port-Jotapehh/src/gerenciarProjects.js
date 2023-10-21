export function projects(){
    const containerProjects = document.getElementById('project'); 

    const sites = [
        'https://imc-calculator-jotapeh.vercel.app', //Caculadora de IMC
        'https://jotapeh-calculator.vercel.app', //Simuladora de Calculadora
        'https://jogo-da-velha-jotapehh.vercel.app', // Jogo da Velha
        'https://coliseu-site.vercel.app/', //Coliseu
    ];

    for(const link of sites){
        fetch(link)
        .then(response => response.text())
        .then(text => {
            const title = text.match(/<title>(.*?)<\/title>/)[1];
            containerProjects.innerHTML += `<a href="${link}" type="external" target="_blank"' class="btn-a bg-slate-100 text-slate-950 text-center select-none w-32 p-2 rounded-lg mt-2 hover:bg-slate-400 hover:scale-110 duration-200">${title}</a>`;
        }); 
        
    }
}