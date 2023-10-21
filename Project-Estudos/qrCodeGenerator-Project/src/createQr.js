export function gerandoQrCode(){
    const btnGerador = document.getElementById('geradorQr');
    btnGerador.addEventListener('click', function(){
        const entrada = document.getElementById('entrada').value;
        const areaQr = document.getElementById('areaQr');
        const qrcode = document.getElementById('qrcode');
        areaQr.style.visibility = 'visible';
        
        var qr = new QRCode(qrcode, {
            text: entrada,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    })
}

function qrCodeImage(){

}

function qrCodeLink(){
    const input = document.getElementById('entrada').value;
    const div = document.getElementById("qrcode");
    new QRCode(div, input);
}

function qrCodeEmail(){

}

function qrCodeTel(){

}