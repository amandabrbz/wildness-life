export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-week]");
  const diasSemana = funcionamento.dataset.week.split(",").map(Number);
  const horasSemana = funcionamento.dataset.hour.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  // verifica se agora é correspondente ao horario funcionamento

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horaAgora >= horasSemana[0] && horaAgora < horasSemana[1];

  semanaAberto && horarioAberto ? funcionamento.classList.add("open") : funcionamento.classList.add("closed");
}
