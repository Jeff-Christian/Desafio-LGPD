
//class contato

class Contato {

    constructor(){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

function Post(form) {

    let data = new Contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("contato").value);

}
  
function Enviar() {
    const nome = document.getElementById("name");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const agree = document.getElementById('agree');

    if(nome.value === '' || sobrenome.value === '' || email.value === '' || cpf.value === '' || telefone.value === ''){
        alert('Por favor, preencha os campos');
        return;
    } else if (agree.checked === false) {
        alert('Por favor, concorde e aceite os nossos termos');
        submitForm();
    } else {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        document.location.reload(true);
    }
}

function submitForm() {
    document.getElementById('contact-form').addEventListener("submit", function(e){
        e.preventDefault();
    })    
}