const botaoCopiar = document.querySelector(".copiar");
const botaoDecriptografar = document.getElementById("botao2");
const roboImg = document.querySelector(".img_robo");
const mensagemPadrao = document.querySelector(".right-section p:nth-child(3)"); // Seleciona a segunda `<p>` na seção

function criptografar() {
    let texto = document.getElementById('texto-cripto').value;
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('mensagem').textContent = textoCriptografado || "Nenhuma mensagem encontrada";

    // Esconder o robô e a mensagem padrão
    roboImg.style.display = "none";
    mensagemPadrao.style.display = "none";

    botaoDecriptografar.disabled = false;
}

function descriptografar() {
    let texto = document.getElementById('texto-cripto').value;
    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('mensagem').textContent = textoDescriptografado || "Nenhuma mensagem encontrada";

    // Mostrar o robô e a mensagem padrão novamente se o texto estiver vazio
    if (textoDescriptografado === "") {
        roboImg.style.display = "block";
        mensagemPadrao.style.display = "block";
    }
}

function copiarTexto() {
    let textoCopiado = document.getElementById('mensagem').textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        botaoCopiar__efeito();
    }).catch(err => {
        console.log('Erro ao copiar o texto: ', err);
    });
}

function botaoCopiar__efeito() {
    botaoCopiar.innerHTML = "Copiado";

    setTimeout(function () {
        botaoCopiar.innerHTML = "Copiar";
    }, 1500);
}
