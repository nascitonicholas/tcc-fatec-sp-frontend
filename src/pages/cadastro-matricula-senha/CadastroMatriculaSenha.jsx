import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import VoltarSair from '../../shared/components/VoltarSair';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import './CadastroMatriculaSenha.scss'



const CadastroLoginSenha = () => {

    localStorage.removeItem("tituloHeader");
    localStorage.removeItem("alunoLogado");
    localStorage.setItem('tituloHeader', 'Primeiro Acesso')

    const history = useHistory();

    const [values, setValues] = React.useState({
        senha: "",
        confirmaSenha: ""
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.clear();

        console.log(values);

        history.push('/cadastro');

        /*Api realizar primeiro cadastro*/
    }

    return (
        <form>
            <VoltarSair flagVoltar={false} /> 
            <div className='flex flex-column flex-center'>
                <div className='flex margin-top-input-text-senha input-text-numericos matricula'>
                    <InputLabel htmlFor="nrMatricula" className='label-text-numericos matricula'>
                        Matricula
                    </InputLabel>
                    <TextField
                        id="nrMatricula"
                        onChange={handleChange("nrMatricula")}
                        variant="outlined"
                        className='box-text-numericos'
                    />
                </div>
                <div className='flex input-text senha'>
                    <InputLabel htmlFor="senha" className='label-text senha'>
                        Senha
                    </InputLabel>
                    <OutlinedInput
                        id="senha"
                        type={values.showPassword ? "text" : "password"}
                        value={values.senha}
                        onChange={handleChange("senha")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        className='box-text-senha'
                    />
                </div>
                <div className='flex input-text confirmarSenha'>
                    <InputLabel htmlFor="confirmarSenha" className='label-text confirmarSenha'>
                        Confirmar Senha
                    </InputLabel>
                    <OutlinedInput
                        id="confirmarSenha"
                        type={values.showConfirmPassword ? "text" : "password"}
                        value={values.confirmaSenha}
                        onChange={handleChange("confirmaSenha")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="Toggle password visibility" 
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownConfirmPassword}
                                >
                                
                                    {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        className='box-text-confirmsenha'

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

export default CadastroLoginSenha;