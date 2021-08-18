import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VoltarSair from './VoltarSair';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputMask from "react-input-mask";
import { Button } from '@material-ui/core';

import '../style/Formulario.scss';


const Formulario = () => {

    const location = useLocation();

    /*Provisorio - Buscar via Api*/
    const tiposEndereco = [
        {
            key: '1',
            value: 'Residencial',
        },
        {
            key: '2',
            value: 'Comercial',
        },
        {
            key: '3',
            value: 'Cobrança',
        }
    ]

    /*Provisorio - Buscar via API*/

    const estados = [
        {
            key:'1',
            value:'São Paulo'
        },
        {
            key:'2',
            value:'Rio de Janeiro'
        },
        {
            key:'3',
            value:'Minas Gerais'
        },
        {
            key:'4',
            value:'Espirito Santo'
        },

    ]

    const [values, setValues] = React.useState({
        nome: "",
        email: "",
        nrMatricula: "",
        nomeMae: "",
        nomePai: "",
        nrCPF: "",
        nrRG: "",
        nrCertificadoMilitar: "",
        nrTituloEleitor: "",
        nrZona: "",
        nrTelefone: "",
        nrCelular: "",
        tipoEndereco: "",
        logradouro: "",
        nrEndereco: "",
        complemento: "",
        bairro: "",
        municipio: "",
        estado: "",
        cep: ""

    });

    useEffect(() => {

    })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.clear();
        if (location.pathname === '/cadastro') {
            console.log('Chamando API para Cadastro')
        } else {
            console.log('Chamando API para Alterar Dados')
        }
        console.log(values);



    };

    const ChangeTituloButton = () => {
        if (location.pathname === '/cadastro') {
            return 'Salvar';
        }
        return 'Alterar';
    }

    const ChangeFlagVoltaSair = () => {

        if (location.pathname === '/cadastro') {
            return false;
        }
        return true;
    }

    return (
        <form>
            <VoltarSair flagVoltar={ChangeFlagVoltaSair()} />
            <div className='flex flex-column flex-center'>
                <div className='flex input-text '>
                    <InputLabel htmlFor="nome" className='color-text nome'>
                        Nome
                    </InputLabel>
                    <TextField
                        id="nome"
                        onChange={handleChange("nome")}
                        variant="outlined"
                        className='box-text-nome width100ch'
                        size='small'
                    />
                    <InputLabel htmlFor="nrMatricula" className='color-text label-text-numeros '>
                        Matricula
                    </InputLabel>
                    <TextField
                        id="nrMatricula"
                        onChange={handleChange("nrMatricula")}
                        variant="outlined"
                        className='box-text-numeros width40ch'
                        size='small'
                    />
                </div>
                <div className='flex input-text'>
                    <InputLabel htmlFor="email" className='color-text label-text-email '>
                        E-mail
                    </InputLabel>
                    <TextField
                        id="email"
                        onChange={handleChange("email")}
                        variant="outlined"
                        className='box-text-email width60ch'
                        size='small'
                    />
                </div>
                <div className='flex input-text pais'>
                    <InputLabel htmlFor="nomeMae" className='color-text label-text-nome-mae '>
                        Nome da Mãe
                    </InputLabel>
                    <TextField
                        id="nomeMae"
                        onChange={handleChange("nomeMae")}
                        variant="outlined"
                        className='box-text'
                        size='small'
                    />
                </div>
                <div className='flex input-text pais'>
                    <InputLabel htmlFor="nomePai" className='color-text label-text-nome-pai '>
                        Nome do Pai
                    </InputLabel>
                    <TextField
                        id="nomePai"
                        onChange={handleChange("nomePai")}
                        variant="outlined"
                        className='box-text'
                        size='small'
                    />
                </div>

                <div className='flex input-text cpfrg margin-labels'>
                    <InputLabel htmlFor="nrCPF" className='color-text label-text-numeros '>
                        CPF
                    </InputLabel>
                    <InputMask
                        mask="999.999.999-99"
                        onChange={handleChange("nrCPF")}
                        disabled={false}
                        maskChar=" "
                    >
                        {() => <TextField
                            id="nrCPF"
                            variant="outlined"
                            className='box-text-numeros width20ch'
                            size='small'
                        />
                        }
                    </InputMask>

                    <InputLabel htmlFor="nrRG" className='color-text label-text-numeros '>
                        RG
                    </InputLabel>
                    <InputMask
                        mask="99.999.999-9"
                        onChange={handleChange("nrRG")}
                        disabled={false}
                        maskChar=" "
                    >
                        {() => <TextField
                            id="nrRG"
                            variant="outlined"
                            className='box-text-numeros width20ch'
                            size='small'
                        />
                        }
                    </InputMask>
                    <InputLabel htmlFor="nrCertificadoMilitar" className='color-text label-text-numeros '>
                        Certificado Militar
                    </InputLabel>
                    <TextField
                        id="nrCertificadoMilitar"
                        onChange={handleChange("nrCertificadoMilitar")}
                        variant="outlined"
                        className='box-text-numeros width30ch'
                        size='small'
                    />
                </div>
                <div className='flex input-text eleitorais'>
                    <InputLabel htmlFor="nrTituloEleitor" className='color-text label-text-numeros '>
                        Titulo de Eleitor
                    </InputLabel>
                    <InputMask
                        mask="9999 9999 9999"
                        onChange={handleChange("nrTituloEleitor")}
                        disabled={false}
                        maskChar=" "
                    >
                        {() => <TextField
                            id="nrTituloEleitor"
                            variant="outlined"
                            className='box-text-numeros width25ch'
                            size='small'
                        />}
                    </InputMask>
                    <InputLabel htmlFor="nrZona" className='color-text label-text-numeros '>
                        Zona
                    </InputLabel>
                    <TextField
                        id="nrZona"
                        onChange={handleChange("nrZona")}
                        variant="outlined"
                        className='box-text-numeros width25ch'
                        size='small'
                    />
                    <InputLabel htmlFor="nrTelefone" className='color-text label-text-numeros '>
                        Telefone
                    </InputLabel>
                    <InputMask
                        mask="(99) 9999-9999"
                        onChange={handleChange("nrTelefone")}
                        disabled={false}
                        maskChar=" "
                    >
                        {() => <TextField
                            id="nrTelefone"
                            variant="outlined"
                            className='box-text-numeros width20ch'
                            size='small'
                        />}
                    </InputMask>
                    <InputLabel htmlFor="nrCelular" className='color-text label-text-numeros '>
                        Celular
                    </InputLabel>
                    <InputMask
                        mask="(99) 99999-9999"
                        onChange={handleChange("nrCelular")}
                        disabled={false}
                        maskChar=" "
                    >
                        {() => <TextField
                            id="nrCelular"
                            variant="outlined"
                            className='box-text-numeros width20ch'
                            size='small'
                        />}
                    </InputMask>
                </div>
                <div className='flex input-text endereco'>
                    <InputLabel htmlFor="tipoEndereco" className='color-text label-text-numeros '>
                        Tipo
                    </InputLabel>
                    <TextField
                        id="tipoEndereco"
                        variant="outlined"
                        select
                        onChange={handleChange("tipoEndereco")}
                        helperText="Selecione o tipo de endereço"
                        className='box-text-numeros width30ch'
                        size='small'
                    >
                        {tiposEndereco.map((option) => (
                            <MenuItem key={option.key} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <InputLabel htmlFor="logradouro" className='color-text label-text-numeros '>
                        Logradouro
                    </InputLabel>
                    <TextField
                        id="logradouro"
                        variant="outlined"
                        onChange={handleChange("logradouro")}
                        className='box-text-numeros width40ch'
                        size='small'
                    />
                    <InputLabel htmlFor="nrEndereco" className='color-text label-text-numeros '>
                        Nº
                    </InputLabel>
                    <TextField
                        id="nrEndereco"
                        variant="outlined"
                        onChange={handleChange("nrEndereco")}
                        className='box-text-numeros width15'
                        size='small'
                    />
                </div>
                <div className='flex input-text bairro-complemento'>
                    <InputLabel htmlFor="complemento" className='color-text label-text-numeros '>
                        Complemento
                    </InputLabel>
                    <TextField
                        id="complemento"
                        variant="outlined"
                        onChange={handleChange("complemento")}
                        className='box-text-numeros width70ch'
                        size='small'
                    />
                    <InputLabel htmlFor="bairro" className='color-text label-text-numeros '>
                        Bairro
                    </InputLabel>
                    <TextField
                        id="bairro"
                        variant="outlined"
                        onChange={handleChange("bairro")}
                        className='box-text-numeros width70ch'
                        size='small'
                    />
                </div>
                <div className='flex input-text cep'>
                    <InputLabel htmlFor="municipio" className='color-text label-text-numeros '>
                        Munícipio
                    </InputLabel>
                    <TextField
                        id="municipio"
                        variant="outlined"
                        onChange={handleChange("municipio")}
                        className='box-text-numeros width70ch'
                        size='small'
                    />
                    <InputLabel htmlFor="estado" className='color-text label-text-numeros '>
                        Estado
                    </InputLabel>
                    <TextField
                        id="estado"
                        variant="outlined"
                        select
                        helperText="Selecione o estado"
                        onChange={handleChange("estado")}
                        className='box-text-numeros width40ch'
                        size='small'
                    >
                        {estados.map((option) => (
                            <MenuItem key={option.key} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <InputLabel htmlFor="cep" className='color-text label-text-numeros '>
                        CEP
                    </InputLabel>
                    <InputMask
                        mask="99999-999"
                        onChange={handleChange("cep")}
                        disabled={false}
                        maskChar=" "
                    >
                        {() => <TextField
                            id="cep"
                            variant="outlined"
                            className='box-text-numeros width30ch'
                            size='small'
                        />}
                    </InputMask>
                </div>
            </div>
            <div className='container-button marginButton'>
                <Button variant="contained" className='button-salvar' onClick={handleSubmit}>
                    <p className='titulo-button'>{ChangeTituloButton()}</p>
                </Button>
            </div>
        </form>
    )


}


export default Formulario;