import React from 'react';
import { Button } from '@material-ui/core';
import './EsqueciMinhaSenha.scss'
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';


const EsqueciMinhaSenha = () => {

    localStorage.removeItem("tituloHeader");
    localStorage.setItem('tituloHeader','Esqueci a minha senha')

    const [values, setValues] = React.useState({
        email: "",
        nrMatricula: "",
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.clear();

        console.log(values);

        /*Api Recupear Senha*/
    }


    return (
        <form>
            <div className='flex flex-column flex-center' >
                <div className='flex margin-top-input-text input-email'>
                    <InputLabel htmlFor="input-email" className='label-email'>
                        E-mail
                    </InputLabel>
                    <TextField
                        id="input-email"
                        onChange={handleChange("email")}
                        variant="outlined"
                        className='box-email'
                    />
                </div>
                <div className='flex input-matricula'>
                    <InputLabel htmlFor="input-matricula" className='label-matricula'>
                        Matrícula
                    </InputLabel>
                    <TextField
                        id="input-matricula"
                        onChange={handleChange("nrMatricula")}
                        variant="outlined"
                        className='box-matricula'
                    />
                </div>

            </div>
            <div className='container-button'>
                <Button variant="contained" className='button-recuperar-senha' onClick={handleSubmit}>
                    <p className='titulo-button'>Enviar senha provisória</p>
                </Button>
            </div>
        </form>


    );
}

export default EsqueciMinhaSenha;