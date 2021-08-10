import React from 'react';
import { Button } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import './CadastroLoginSenha.scss'



const CadastroLoginSenha = () => {

    localStorage.removeItem("tituloHeader");
    localStorage.setItem('tituloHeader', 'Primeiro Acesso')

    const [values, setValues] = React.useState({
        login: "",
        senha: "",
        confirmaSenha:""
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.clear();

        console.log(values);

        /*Api realizar primeiro cadastro*/
    }

    return (
        <form>
            <div className='flex flex-column flex-center'>

                <div className='flex margin-top-input-text input-text-numericos'>
                    <InputLabel htmlFor="nrMatricula" className='label-text-numericos'>
                        Login
                    </InputLabel>
                    <TextField
                        id="nrMatricula"
                        onChange={handleChange("nrMatricula")}
                        variant="outlined"
                        className='box-text-numericos'
                    />
                </div>
                <div className='flex input-text-numericos'>
                    <InputLabel htmlFor="senha" className='label-text-numericos cpf'>
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

                    />
                </div>

                <div className='flex input-text-numericos'>
                    <InputLabel htmlFor="nrRG" className='label-text-numericos rg'>
                        Confirmar Senha
                    </InputLabel>
                    <OutlinedInput
                        id="nrRG"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("confirmaSenha")}
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