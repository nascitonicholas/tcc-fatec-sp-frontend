import React from 'react';
import { useHistory } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import VoltarSair from '../../shared/components/VoltarSair';
import { apiUser } from '../../services/api';
import Usuario from '../../models/Usuario';
import './MeusEmail.scss';

const MeusEmails = () => {

  const history = useHistory();

  const alunoLogado = localStorage.getItem('alunoLogado');
  const aluno = JSON.parse(alunoLogado);


  const [values, setValues] = React.useState({
    newEmail: ""
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      nrMatricula: aluno.matricula,
      email_pessoal: values.newEmail
    }

    try {

      const response = await apiUser.put('/usuario/atualizarEmailPessoal', body)

      const user = response.data.data;

      var alunoLogado = new Usuario(
        user.nome,
        user.email,
        user.curso.nome,
        user.curso.id,
        user.turno.nome,
        user.turno.id,
        user.nrMatricula,
        "FATEC SÃO PAULO",
        user.email_pessoal,
        user.nome_mae,
        user.nome_pai,
        user.cpf,
        user.rg,
        user.certificadoMilitar,
        user.numeroTitulo,
        user.zonaTitulo,
        user.telefone,
        user.celular,
        user.enderecos[0].tipo_endereco,
        user.enderecos[0].logradouro,
        user.enderecos[0].numero,
        user.enderecos[0].complemento,
        user.enderecos[0].bairro,
        user.enderecos[0].municipio,
        user.enderecos[0].estado.id,
        user.enderecos[0].cep,
        user.tokenAutenticacao);
      
      localStorage.setItem('alunoLogado', JSON.stringify(alunoLogado));
      
      alert("Email Atualizado com Sucesso")
      
      history.push('/menu-principal')
      
      window.location.reload()

    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div>
      <VoltarSair flagVoltar={true} />
      <div className='email-container flex-column flex-justify-space-between' >
        <h1><strong>Nome:</strong> {aluno.nome}</h1>
        <h1><strong>Matricula:</strong> {aluno.matricula}</h1>
        <h1><strong>E-mail Pessoal:</strong> {aluno.emailPessoal}</h1>
        <h1><strong>E-mail Institucional:</strong> {aluno.email}</h1>
        <div className='form-email flex flex-wrap' >
          <InputLabel htmlFor="newEmail" className='label'>
            Alterar para:
          </InputLabel>
          <TextField
            id="newEmail"
            onChange={handleChange("newEmail")}
            variant="outlined"
            className='input'
            size='small'
          />
        </div>
        <div className='container-button marginButton'>
          <Button variant="contained" className='button-salvar' onClick={handleSubmit}>
            <p className='titulo-button'>Salvar</p>
          </Button>
        </div>
      </div>
    </div>
  )

}

export default MeusEmails;