import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import VoltarSair from '../../shared/components/VoltarSair';
import './MeusEmail.scss';

const MeusEmails = () => {

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
    console.log(event);
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