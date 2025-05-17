// Variável que representa o gênero do bebê
let babygender = "menino"; // Pode ser alterado para "menino"

// Seleciona o botão e a div onde a mensagem será exibida
const revealButton = document.getElementById('revealButton');
const reveal = document.getElementById('reveal');

// Adiciona o evento de clique no botão
revealButton.addEventListener('click', () => {
  // Altera o conteúdo da mensagem, trocando "um" ou "uma"
  const article = babygender === "menina" ? "uma" : "um";
  reveal.innerHTML = `🎉 Parabéns! Você está esperando ${article} <strong>${babygender}</strong>!`;

  // Adiciona a classe 'show' para exibir a mensagem com animação
  reveal.classList.add('show');
  
  // Muda a cor de fundo e texto de acordo com o gênero
  reveal.classList.add(babygender);

  // Oculta o botão após o clique
  revealButton.style.display = 'none';
});
