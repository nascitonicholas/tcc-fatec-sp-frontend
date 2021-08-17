import React from 'react';
//import { useHistory } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import InputMask from "react-input-mask";

import '../style/Formulario.scss';


const Formulario = () => {

    //const history = useHistory();

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

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    /*
    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.clear();

        console.log(values);

       
        history.push('/menu-principal')
    };
    */

    return (
        <form>
            <div className='flex flex-column flex-center'>
                <div className='flex margin-top input-text '>
                    <InputLabel htmlFor="nome" className='color-text nome'>
                        Nome
                    </InputLabel>
                    <TextField
                        id="nome"
                        onChange={handleChange("nome")}
                        variant="outlined"
                        className='box-text-nome'
                    />
                    <InputLabel htmlFor="nrMatricula" className='color-text label-text-numeros '>
                        Matricula
                    </InputLabel>
                    <TextField
                        id="nrMatricula"
                        onChange={handleChange("nrMatricula")}
                        variant="outlined"
                        className='box-text-numeros width40ch'
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
                        className='box-text-nome'
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
                        className='box-text-nome'
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
                            className='box-text-numeros width40ch'
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
                            className='box-text-numeros width40ch'
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
                        className='box-text-numeros width40ch'
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
                            className='box-text-numeros width30ch'
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
                            className='box-text-numeros width30ch'
                        />}
                    </InputMask>
                </div>
                <InputLabel className='color-text label-text-numeros '>
                    Endereço
                </InputLabel>
                <div aria-label='ass' className='flex input-text endereco'>
                    <InputLabel htmlFor="nrCelular" className='color-text label-text-numeros '>
                        Tipo
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
                            className='box-text-numeros width30ch'
                        />}
                    </InputMask>
                </div>
            </div>
        </form>
    )


}


export default Formulario;