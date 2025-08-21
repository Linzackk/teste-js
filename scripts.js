window.addEventListener("DOMContentLoaded", () => {
  // --- Contadores existentes ---
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

  // --- Pessoa especial hoje ---
  const el = document.getElementById("pessoaEspecial");
  if (el) {
    const hoje = new Date();
    const inicioAno = new Date(hoje.getFullYear(), 0, 1);
    const diff = Math.floor((hoje - inicioAno) / (1000 * 60 * 60 * 24));
    const pessoaEspecial = diff % 2 === 0 ? "Carouu 💗💖" : "Isaac ❤️❤️";

    el.innerHTML = `
      <strong>A pessoa especial de hoje é:</strong>
      <span>${pessoaEspecial}</span>
    `;
  }
});
