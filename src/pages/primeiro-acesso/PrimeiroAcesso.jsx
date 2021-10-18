import React from 'react';
import Formulario from '../../shared/components/Formulario';
import { apiBd } from '../../services/api';
import './PrimeiroAcesso.scss'

var values = []

async function carregaCursos() {
    await apiBd.get('/cursos').then(res => {
        values = res.data.data;
    })
}


const PrimeiroAcesso = () => {


    //const [values, setValues] = React.useState([])

   

    
    carregaCursos()

    console.log(values)

    localStorage.removeItem("tituloHeader");
    localStorage.setItem('tituloHeader', 'Primeiro Acesso')

    

    return (
        <Formulario cursos={values}/>
    )
}

export default PrimeiroAcesso;