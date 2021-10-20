import React from 'react';
import Formulario from '../../shared/components/Formulario';
import './PrimeiroAcesso.scss'


const PrimeiroAcesso = () => {

    localStorage.removeItem("tituloHeader");
    localStorage.setItem('tituloHeader', 'Primeiro Acesso')

    return (
        <Formulario/>
    )
}

export default PrimeiroAcesso;