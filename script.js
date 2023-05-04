function Confirmar()
{
    texto = nome.value // Pega o que foi digitado
    teste.innerHTML = texto // Insere a ID no span
}
function MostrarJanela()
{
    janelinha.style.display = "block"
}
function Fechar()
{
    janelinha.style.display = "none"
}
soma = 0
function Somar()
{
    soma++
    resultado.value = soma
}
function Imprimir()
{
    window.print();
}