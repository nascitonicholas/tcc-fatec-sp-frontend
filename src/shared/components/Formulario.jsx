import { React, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import VoltarSair from './VoltarSair';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputMask from "react-input-mask";
import { Button } from '@material-ui/core';
import { apiBd, apiUser } from '../../services/api';
import Usuario from '../../models/Usuario';

import '../style/Formulario.scss';


function Formulario() {

    const history = useHistory();
    const location = useLocation();

    var passo1 = JSON.parse(localStorage.getItem('dadosMatriculaSenha'));

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


    const [values, setValues] = useState({
        nome: "",
        email: "",
        nrMatricula: "",
        senha: "",
        curso: "",
        turno: "",
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

    const [cursos, setCursos] = useState([]);

    const [estados, setEstados] = useState([]);

    const [turnos, setTurnos] = useState([]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    useEffect(async () => {

        try {
            const response = await apiBd.get('/cursos');
            setCursos(response.data.data)
        } catch (error) {
            console.log(error)
        }

        try {
            const response = await apiBd.get('/enderecos/estados');
            setEstados(response.data.data)
        } catch (error) {
            console.log(error)
        }

        try {
            const response = await apiBd.get('/turnos');
            setTurnos(response.data.data);
        } catch (error) {
            console.log(error)
        }


    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (location.pathname === '/cadastro') {

            const endereco = {
                tipo_endereco: values.tipoEndereco,
                logradouro: values.logradouro,
                numero: values.nrEndereco,
                complemento: values.complemento,
                bairro: values.bairro,
                municipio: values.municipio,
                id_estado: values.estado,
                cep: values.cep
            }

            try {

                /*Cadastra o endereço*/
                const body = {
                    lista_enderecos: [endereco]
                }

                const response = await apiBd.post('/enderecos', body);
                var response_id_endereco = response.data.data[0].id_endereco;

                var passo1 = JSON.parse(localStorage.getItem('dadosMatriculaSenha'));

                /*
                if (passo1 != null && passo1 !== undefined) {
                    values.nrMatricula = passo1.nrMatricula,
                    values.senha = passo1.senha
                }*/


                /*Cadastrar Usuário*/

                const data = {
                    nrMatricula: values.nrMatricula,
                    nome: values.nome,
                    email: values.email,
                    senha: values.senha,
                    cpf: values.nrCPF,
                    rg: values.nrRG,
                    certificadoMilitar: values.nrCertificadoMilitar,
                    numeroTitulo: values.nrTituloEleitor,
                    zonaTitulo: values.nrZona,
                    telefone: values.nrTelefone,
                    celular: values.nrCelular,
                    id_endereco: response_id_endereco,
                    id_curso: values.curso,
                    id_turno: values.turno
                }

                const res = await apiUser.post('/usuario/cadastrar', data);

                const user = res.data.data;

                var alunoLogado = new Usuario(user.nome, user.email, user.curso.nome, user.turno.nome, user.nrMatricula, "FATEC SÃO PAULO", user.tokenAutenticacao);

                localStorage.setItem('alunoLogado', JSON.stringify(alunoLogado));

                history.push('/menu-principal');
                window.location.reload();

            } catch (error) {
                alert(error)
            }


        } else {

            const body = {
                nrMatricula: values.nrMatricula,
                nome: values.nome,
                email: values.email,
                senha: values.senha,
                cpf: values.nrCPF,
                rg: values.nrRG,
                certificadoMilitar: values.nrCertificadoMilitar,
                numeroTitulo: values.nrTituloEleitor,
                zonaTitulo: values.nrZona,
                telefone: values.nrTelefone,
                celular: values.nrCelular,
                id_curso: values.curso,
                id_turno: values.turno,
                endereco: {
                    tipo_endereco: values.tipoEndereco,
                    logradouro: values.logradouro,
                    numero: values.nrEndereco,
                    complemento: values.complemento,
                    bairro: values.bairro,
                    municipio: values.municipio,
                    id_estado: values.estado,
                    cep: values.cep
                }
            }

            const res = await apiUser.put('/usuario/cadastrar', body);

            console.log(res)


        }

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
            <div className='form'>
                <div className='form'>
                    <InputLabel htmlFor="nome" className='label'>
                        Nome
                    </InputLabel>
                    <TextField
                        id="nome"
                        onChange={handleChange("nome")}
                        variant="outlined"
                        className='input'
                        size='small'
                    />
                    <InputLabel htmlFor="nrMatricula" className='label'>
                        Matricula
                    </InputLabel>
                    <TextField
                        value={values.nrMatricula}
                        id="nrMatricula"
                        onChange={handleChange("nrMatricula")}
                        variant="outlined"
                        className='input'
                        size='small'
                    />
                    <InputLabel htmlFor="curso" className='label'>
                        Curso
                    </InputLabel>
                    <TextField

                        id="curso"
                        variant="outlined"
                        select
                        value={values.curso}
                        helperText="Selecione o curso"
                        onChange={handleChange("curso")}
                        className='input'
                        size='small'
                    >

                        {
                            cursos.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.nome}
                                </MenuItem>
                            ))
                        }


                    </TextField>
                    <InputLabel htmlFor="turno" className='label'>
                        Período
                    </InputLabel>
                    <TextField

                        id="curso"
                        variant="outlined"
                        select
                        value={values.turno}
                        helperText="Selecione o período"
                        onChange={handleChange("turno")}
                        className='input'
                        size='small'
                    >

                        {
                            turnos.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.nome}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </div>
                <div className='form'>
                    <InputLabel htmlFor="email" className='label'>
                        E-mail
                    </InputLabel>
                    <TextField
                        id="email"
                        onChange={handleChange("email")}
                        variant="outlined"
                        className='input'
                        size='small'
                    />
                </div>
                <div className='form'>
                    <InputLabel htmlFor="nomeMae" className='label'>
                        Nome da Mãe
                    </InputLabel>
                    <TextField
                        id="nomeMae"
                        onChange={handleChange("nomeMae")}
                        variant="outlined"
                        className='input'
                        size='small'
                    />
                    <InputLabel htmlFor="nomePai" className='label'>
                        Nome do Pai
                    </InputLabel>
                    <TextField
                        id="nomePai"
                        onChange={handleChange("nomePai")}
                        variant="outlined"
                        className='input'
                        size='small'
                    />
                </div>
                <div className='form'>

                </div>

                <div className='form'>
                    <InputLabel htmlFor="nrCPF" className='label'>
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

                    <InputLabel htmlFor="nrRG" className='label'>
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
                            className='input'
                            size='small'
                        />
                        }
                    </InputMask>
                    <InputLabel htmlFor="nrCertificadoMilitar" className='label'>
                        Certificado Militar
                    </InputLabel>
                    <TextField
                        id="nrCertificadoMilitar"
                        onChange={handleChange("nrCertificadoMilitar")}
                        variant="outlined"
                        className='input'
                        size='small'
                    />
                </div>
                <div className='form'>
                    <InputLabel htmlFor="nrTituloEleitor" className='label'>
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
                            className='input'
                            size='small'
                        />}
                    </InputMask>
                    <InputLabel htmlFor="nrZona" className='label'>
                        Zona
                    </InputLabel>
                    <TextField
                        id="nrZona"
                        onChange={handleChange("nrZona")}
                        variant="outlined"
                        className='input'
                        size='small'
                    />
                    <InputLabel htmlFor="nrTelefone" className='label'>
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
                            className='input'
                            size='small'
                        />}
                    </InputMask>
                    <InputLabel htmlFor="nrCelular" className='label'>
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
                            className='input'
                            size='small'
                        />}
                    </InputMask>
                </div>
                <div className='form'>
                    <InputLabel htmlFor="tipoEndereco" className='label'>
                        Tipo
                    </InputLabel>
                    <TextField
                        id="tipoEndereco"
                        variant="outlined"
                        select
                        value={values.tipoEndereco}
                        onChange={handleChange("tipoEndereco")}
                        helperText="Selecione o tipo de endereço"
                        className='input'
                        size='small'
                    >
                        {tiposEndereco.map((option) => (
                            <MenuItem key={option.key} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <InputLabel htmlFor="logradouro" className='label'>
                        Logradouro
                    </InputLabel>
                    <TextField
                        id="logradouro"
                        variant="outlined"
                        onChange={handleChange("logradouro")}
                        className='input'
                        size='small'
                    />
                    <InputLabel htmlFor="nrEndereco" className='label'>
                        Nº
                    </InputLabel>
                    <TextField
                        id="nrEndereco"
                        variant="outlined"
                        onChange={handleChange("nrEndereco")}
                        className='input'
                        size='small'
                    />
                </div>
                <div className='form'>
                    <InputLabel htmlFor="complemento" className='label'>
                        Complemento
                    </InputLabel>
                    <TextField
                        id="complemento"
                        variant="outlined"
                        onChange={handleChange("complemento")}
                        className='input'
                        size='small'
                    />
                    <InputLabel htmlFor="bairro" className='label'>
                        Bairro
                    </InputLabel>
                    <TextField
                        id="bairro"
                        variant="outlined"
                        onChange={handleChange("bairro")}
                        className='input'
                        size='small'
                    />
                </div>
                <div className='form'>
                    <InputLabel htmlFor="municipio" className='label'>
                        Munícipio
                    </InputLabel>
                    <TextField
                        id="municipio"
                        variant="outlined"
                        onChange={handleChange("municipio")}
                        className='input'
                        size='small'
                    />
                    <InputLabel htmlFor="estado" className='label'>
                        Estado
                    </InputLabel>
                    <TextField
                        id="estado"
                        variant="outlined"
                        select
                        value={values.estado}
                        helperText="Selecione o estado"
                        onChange={handleChange("estado")}
                        className='input'
                        size='small'
                    >
                        {estados.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.nome}
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
                            className='input'
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