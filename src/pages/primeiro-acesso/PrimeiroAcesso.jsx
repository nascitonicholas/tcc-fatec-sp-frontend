import React from 'react';
import Formulario from '../../shared/components/Formulario';
import { apiBd } from '../../services/api';
import './PrimeiroAcesso.scss'


const PrimeiroAcesso = () => {

    localStorage.removeItem("tituloHeader");
    localStorage.setItem('tituloHeader', 'Primeiro Acesso')

    const [cursos, setCursos] = React.useState([]);
    const [estados, setEstados] = React.useState([]);

    async function carregaCursos() {
        const res = await apiBd.get('/cursos');
        setCursos(res.data.data)
    }

    async function carregaEstados() {
        await apiBd.get('/enderecos/estados').then(res => {
            setEstados(res.data.data)
        });
    }

    carregaCursos() 
    carregaEstados() 

    return (
        <Formulario cursos={cursos} estados={estados} />
    )
}

export default PrimeiroAcesso;