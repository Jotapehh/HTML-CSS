export function onHourDate(){
    const  data = new Date();
    const hora = data.getHours();
    const optionsDate = {month: '2-digit', day: '2-digit'};
    const dataFormatada = data.toLocaleString('pt-BR', optionsDate);
    const boxMsg = document.getElementById('box-msg');
    const elementHora = document.getElementById('hora');
    const horaFormatada = data.toLocaleString('pt-BR', {hour: '2-digit', minute:'2-digit'});
    elementHora.innerText = horaFormatada;
    
    //NATAL
    if(dataFormatada === '25/12'){
        boxMsg.innerText = 'Feliz Natal!';

    }

    //DIA DAS MÃES
    if(dataFormatada === '12/05'){
        boxMsg.innerText = 'Feliz dia das mães!';
    }

    // ANO NOVO
    if(dataFormatada === '01/01'){
        boxMsg.innerText = 'Feliz Ano novo!';
    }
    
    else{
        if(hora >= 5 && hora < 12){
            boxMsg.innerText = 'Bom dia!';
        }
        
        if(hora >= 12 && hora < 18){
            boxMsg.innerText = 'Boa tarde!';
        }
        
        if(hora >= 18 && hora <= 23){
            boxMsg.innerText = 'Boa Noite!'
        }
        
        else{
            boxMsg.innerText = 'Tá meio tarde, mas de qualquer forma';
        }
    }
}