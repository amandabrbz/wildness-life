export default class Funcionamento {
  constructor(funcionamento, active, close) {
    this.funcionamento = document.querySelector(funcionamento);
    this.active = active;
    this.close = close;
  }

  dadosFuncionamentos() {
    this.diasSemana = this.funcionamento.dataset.week.split(",").map(Number);
    this.horasSemana = this.funcionamento.dataset.hour.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horaAgora >= this.horasSemana[0] &&
      this.horaAgora < this.horasSemana[1];

    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.active);
    } else {
      this.funcionamento.classList.add(this.close);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamentos();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
