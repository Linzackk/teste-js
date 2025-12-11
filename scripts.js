window.addEventListener("DOMContentLoaded", () => {
  // --- Contadores existentes ---
  const data1 = new Date("2025-01-28");
  const data2 = new Date("2025-05-17");
  const dataFutura = new Date("2025-12-24"); // altere a data aqui se quiser

  function calcularDiasDesde(data) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    data.setHours(0, 0, 0, 0);
    const diferenca = hoje - data - 1;
    return Math.floor(diferenca / (1000 * 60 * 60 * 24));
  }

  function calcularDiasFaltando(data) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    data.setHours(0, 0, 0, 0);
    const diferenca = data - hoje + 1;
    return Math.max(Math.ceil(diferenca / (1000 * 60 * 60 * 24)), 0);
  }

  function atualizarContadores() {
    document.getElementById("contador1").textContent = `${calcularDiasDesde(data1)} dias`;
    document.getElementById("contador2").textContent = `${calcularDiasDesde(data2)} dias`;
    document.getElementById("contador3").textContent = `${calcularDiasFaltando(dataFutura)} dias`;

    // --- Pessoa especial hoje ---
    const el = document.getElementById("especial"); // aqui usamos o id do seu span
    if (el) {
        const hoje = new Date();
        const inicioAno = new Date(hoje.getFullYear(), 0, 1);
        const diff = Math.floor((hoje - inicioAno) / (1000 * 60 * 60 * 24));
        const pessoaEspecial = diff % 2 === 0 ? "Carouu 💗💖" : "Isaac ❤️❤️";

        el.textContent = pessoaEspecial; // apenas preenche o span
    }
}

// chama a função de atualização
atualizarContadores();

// atualiza a cada 24 horas
setInterval(atualizarContadores, 1000 * 60 * 60 * 24);
});
