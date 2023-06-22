function logar(){
    event.preventDefault();
    var login=document.getElementById('email_l').value
    var senha=document.getElementById('senha_l').value
    var Clogin=document.getElementById('emailCadastro').value
    var Csenha=document.getElementById('senhaCadastro').value

    if(login==Clogin && senha==Csenha){
        alert("logado com sucesso")
    }else{
        alert("email ou senha invalido")
    }
}   

function cadastro(Clogin,Csenha){
    event.preventDefault();
    Clogin=login
    Csenha=senha
    alert("usuario cadaastrado")

}
