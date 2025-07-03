
window.addEventListener("DOMContentLoaded", () => {
  const data1 = new Date("2025-01-28");
  const data2 = new Date("2025-05-17");
  const dataFutura = new Date("2025-07-20"); // altere a data aqui se quiser

  function calcularDiasDesde(data) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    data.setHours(0, 0, 0, 0);
    const diferenca = hoje - data;
    return Math.floor(diferenca / (1000 * 60 * 60 * 24));
  }

  function calcularDiasFaltando(data) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    data.setHours(0, 0, 0, 0);
    const diferenca = data - hoje;
    return Math.max(Math.ceil(diferenca / (1000 * 60 * 60 * 24)), 0);
  }

  function atualizarContadores() {
    document.getElementById("contador1").textContent = `${calcularDiasDesde(data1)} dias`;
    document.getElementById("contador2").textContent = `${calcularDiasDesde(data2)} dias`;
    document.getElementById("contador3").textContent = `${calcularDiasFaltando(dataFutura)} dias`;
  }

  atualizarContadores();
  setInterval(atualizarContadores, 1000 * 60 * 60 * 24);
});

window.addEventListener('DOMContentLoaded', () => {
  const botoesContainer = document.querySelector('.botoes-navegacao');
  if (!botoesContainer) return;

  const botoes = botoesContainer.querySelectorAll('button');

  // Esconde todos os botões inicialmente
  botoes.forEach(botao => {
    botao.style.display = 'none';
  });

  // Função para verificar e mostrar os botões conforme a hora
  function atualizarBotoes() {
    const agora = new Date();

    // Verifica se é 05 de julho (mes é zero-based: 0=jan, 6=julho)
    if (agora.getDate() === 5 && agora.getMonth() === 6) {
      const horas = agora.getHours();

      // Horários para aparecer os botões na mesma ordem que os botões
      const horarios = [8, 12, 15, 19, 0];

      // Mostrar botões que já passaram do horário
      botoes.forEach((botao, i) => {
        // Caso especial para o 0h (meia-noite) do dia 06/07
        if (horarios[i] === 0) {
          // Mostrar só se for 06/07 e hora >= 0
          if ((agora.getDate() === 6 && agora.getMonth() === 6) && horas >= 0) {
            botao.style.display = 'inline-block';
          } else {
            botao.style.display = 'none';
          }
        } else {
          // Para os outros horários no dia 05/07
          if (horas >= horarios[i]) {
            botao.style.display = 'inline-block';
          } else {
            botao.style.display = 'none';
          }
        }
      });

    } else {
      // Fora do dia 05/07 e 06/07 (para 0h) esconde tudo
      botoes.forEach(botao => {
        botao.style.display = 'none';
      });
    }
  }

  atualizarBotoes();

  // Atualiza a cada minuto, para o botão aparecer assim que o horário bater
  setInterval(atualizarBotoes, 60 * 1000);
});
