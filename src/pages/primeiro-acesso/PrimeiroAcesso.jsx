import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import './PrimeiroAcesso.scss'


const PrimeiroAcesso = () => {

    const history = useHistory();


    localStorage.removeItem("tituloHeader");
    localStorage.setItem('tituloHeader', 'Primeiro Acesso')

    const [values, setValues] = React.useState({
        nome: "",
        email: "",
        nrMatricula: "",
        nrCPF: "",
        nrRG: "",
        nomeMae: "",
        nomePai: ""
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.clear();

        console.log(values);

        /*Api realizar primeiro cadastro*/

        history.push('/cadastro-login-senha')
    }

    return (
        <form>
            <div className='flex flex-column flex-center'>
                <div className='flex margin-top-input-text input-text'>
                    <InputLabel htmlFor="nome" className='label-text nome'>
                        Nome
                    </InputLabel>
                    <TextField
                        id="nome"
                        onChange={handleChange("nome")}
                        variant="outlined"
                        className='box-text'
                    />
                </div>
                <div className='flex input-text'>
                    <InputLabel htmlFor="email" className='label-text'>
                        E-mail
                    </InputLabel>
                    <TextField
                        id="email"
                        onChange={handleChange("email")}
                        variant="outlined"
                        className='box-text'
                    />
                </div>
                <div className='flex input-text-numericos'>
                    <InputLabel htmlFor="nrMatricula" className='label-text-numericos'>
                        Matrícula
                    </InputLabel>
                    <TextField
                        id="nrMatricula"
                        onChange={handleChange("nrMatricula")}
                        variant="outlined"
                        className='box-text-numericos'
                    />
                </div>
                <div className='flex input-text-numericos'>
                    <InputLabel htmlFor="nrCPF" className='label-text-numericos cpf'>
                        CPF
                    </InputLabel>
                    <TextField
                        id="nrCPF"
                        onChange={handleChange("nrCPF")}
                        variant="outlined"
                        className='box-text-numericos cpf'
                    />
                </div>
                <div className='flex input-text-numericos'>
                    <InputLabel htmlFor="nrRG" className='label-text-numericos rg'>
                        RG
                    </InputLabel>
                    <TextField
                        id="nrRG"
                        onChange={handleChange("nrRG")}
                        variant="outlined"
                        className='box-text-numericos'
                    />
                </div>
                <div className='flex input-text'>
                    <InputLabel htmlFor="nomeMae" className='label-text nomeMae'>
                        Nome Mãe
                    </InputLabel>
                    <TextField
                        id="nomeMae"
                        onChange={handleChange("nomeMae")}
                        variant="outlined"
                        className='box-text'
                    />
                </div>
                <div className='flex input-text'>
                    <InputLabel htmlFor="nomePai" className='label-text nomePai'>
                        Nome Pai
                    </InputLabel>
                    <TextField
                        id="nomePai"
                        onChange={handleChange("nomePai")}
                        variant="outlined"
                        className='box-text'
                    />
                </div>
            </div>
            <div className='container-button'>
                <Button variant="contained" className='button-salvar' onClick={handleSubmit}>
                    <p className='titulo-button'>Salvar</p>
                </Button>
            </div>
        </form>


    )




}


export default PrimeiroAcesso;