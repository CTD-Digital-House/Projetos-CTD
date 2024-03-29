/*
    Alerts
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

    alert(texto|valor);

    Prompts
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt

    prompt(texto, valor);

    Confirm
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/confirm

    confirm(mensagem);
*/

// 1. Guarda o nome do usuário.
var nomeDoUsuario = prompt('Qual o seu nome?');
// 2. Guarda a quantidade de dolares que o usuário deseja cotar.
var quantidadeDolares = prompt('Quantos dólares você gostaria de cotar?');
// 3. Valor do dolar hoje
var cotacaoDolarHoje = 5.3;
// 4. Apresenta o resultado.
// var saudar = alert('Olá' + ' ' + nomeDoUsuario + 'US$' + ' ' + quantidadeDolares + ' ' + 'valem' + ' ' + 'R$' + ' ' + quantidadeDolares *cotacaoDolarHoje + ' ' + 'hoje.');
// Código melhorado...
var saudar = alert(`Olá ${nomeDoUsuario}. US$ ${quantidadeDolares} valem R$ ${quantidadeDolares * cotacaoDolarHoje} hoje,`);