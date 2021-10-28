export default class Usuario {

    constructor(nome, email, curso, periodo, matricula, campus, emailPessoal, token) {
        this.nome = nome;
        this.email = email;
        this.curso = curso;
        this.periodo = periodo;
        this.matricula = matricula;
        this.campus = campus;
        this.emailPessoal = emailPessoal;
        this.token = token;
    }

    static getUsuario() {
        return JSON.parse(localStorage.getItem('alunoLogado'));
    }
}