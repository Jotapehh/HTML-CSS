let msg = document.getElementById("msg");

function login(){
    const emailOriginal = "junindograu@gmail.com";
    const senhaOriginal = "junindograu123";
    let emailEscrito = document.getElementById("email").value;
    let senhaEscrita = document.getElementById("senha").value;

    if(emailEscrito === emailOriginal && senhaEscrita === senhaOriginal){
        msg.innerHTML = "Login feito com sucesso!!";
    }
    else{
        msg.innerHTML = "Opam man, deu erro em algo aeh";
    }
}

function mostrarSenha(){
    let senha = document.getElementById("senha");
    let mostrar = document.getElementById("mostrar")

   if(senha.type === "password"){
        senha.type = "text";
        mostrar.src = "image/noVisible.png";
        mostrar.title = "esconder";
   }
   else{
        senha.type = "password";
        mostrar.style.color = "red"
        mostrar.src = "image/visible.png";
        mostrar.title = "mostrar"
   }
}