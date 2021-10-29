export default class Usuario {

    constructor(nome, email, curso, idCurso, periodo, idPeriodo, matricula, campus, emailPessoal, nomeMae, nomePai,
        cpf, rg, nrCertificado, numeroTitulo, zonaTitulo, telefone, celular, 
        tipoEendereco,logradouro,numero,complemento,bairro,municipio,estado,cep,
        token) {
        this.nome = nome;
        this.email = email;
        this.curso = curso;
        this.idCurso = idCurso;
        this.periodo = periodo;
        this.idPeriodo = idPeriodo;
        this.matricula = matricula;
        this.campus = campus;
        this.emailPessoal = emailPessoal;
        this.nomeMae = nomeMae;
        this.nomePai = nomePai;
        this.cpf = cpf;
        this.rg = rg;
        this.nrCertificado = nrCertificado;
        this.numeroTitulo = numeroTitulo;
        this.zonaTitulo = zonaTitulo;
        this.telefone = telefone;
        this.celular = celular;
        this.tipoEendereco=tipoEendereco;
        this.logradouro=logradouro;
        this.numero=numero;
        this.complemento=complemento;
        this.bairro=bairro;
        this.municipio=municipio;
        this.estado=estado;
        this.cep=cep;
        this.token = token;
    }

    static getUsuario() {
        return JSON.parse(localStorage.getItem('alunoLogado'));
    }
}