//DECLARANDO AS VARIAVEIS
const form  =document.getElementById("form")
const nome  =document.getElementById("nome")
const email =document.getElementById("email")
const senha =document.getElementById("senha")

//EVENTO QUE VAI PEGAR O QUE ACONTECER NO FORMULARIO

form.addEventListener('submit',(e)=>{
    //PREVINE QUALQUER ALTERAÇÃO NO FORMULÁRIO
    e.preventDefault()

    //CHAMAR A FUNÇÃO QUE VAI CHECAR OS CAMPOS
    checarCampos()
})  

//FUNÇÃO CHECAR CAMPOS
function checarCampos(){
    //DECLARANDO AS VARIAVEIS
    // O METODO TRIM REMOVE ESPAÇOS EM BRANCO NO INICIO E NO FIM DO TEXTO
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const senhaValor = senha.value.trim()

    //SE O CAMPO NOME ESTIVER VAZIO
    if(nomeValor ===""){
       validarErro(nome,"Preencha o campo nome")
    }
    else{
        validarSucesso(nome)
    }

    //SE O CAMPO EMAIL ESTIVER VAZIO

    if(emailValor === ""){
        validarErro(email, "Preencha o campo email")
    }
    else{   
        validarSucesso(email)
    }

    //SE O CAMPO SENHA ESTIVER VAZIO

    if(senhaValor === ""){
        validarErro(senha,"Preencha o campo senha")
    }
    else if(senhaValor.length < 8)
    {
        validarErro(senha,"A senha deve ter mais que 8 caracteres")
    }else{
        validarSucesso(senha)
    }
    

} 

//VALIDAR ERROR

    function validarErro(input,message){    
        //RETORNA PARA O ELEMENTO PAI
        const controle = input.parentElement;
        // PEGA O PRIMEIRO ELEMENTO SMALL QUE O SELETOR ENCONTRAR
        const small = controle.querySelector('small')
        //PEGA A MENSAGEM NO CAMPO EM CASO DE ERRO
        small.innerText = message
        //PEGA AS CONFIGURAÇÕES DE CSS DA CLASSE CONTROLE E ERROR
        controle.className ="controle error"
    }

//VALIDAR SUCESSO
    function validarSucesso(input){
        //RETORNA PARA O ELEMENTO PAI
        const controle = input.parentElement;
        //PEGA A CLASSE DO CONTROLE SUCESSO
        controle.className = "controle sucesso"
    }


//função para entrar no site/sistema se o cadastro estiver ok
function chamar(){
    if(''){
        setTimeout(()=>{window.location = 'index.html'}, 2000)
    }
    else{
        setTimeout(()=>{window.location = 'login.html'}, 2000)
    }
}