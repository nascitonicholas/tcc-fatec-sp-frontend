import React, { useEffect } from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import { Button } from '@material-ui/core';
import './EsqueciMinhaSenha.scss'


const EsqueciMinhaSenha = () => {

    const [values, setValues] = React.useState({
        email: "",
        nrMatricula: "",
    });


    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.clear();

        console.log(values);

        /*Api Recupear Senha*/
    }


    return (
        <form>
            <VoltarSair flagVoltar={true} />
            <div className='flex flex-column flex-center' >
                <p>E-mail</p>
                <p>Matricula</p>
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