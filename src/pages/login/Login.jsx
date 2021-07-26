import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Aluno from '../../assets/login/aluno.png';
import LogoFatec from '../../assets/logoFatec.png';
import './style.scss'
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Login = () => {

    const [values, setValues] = React.useState({
        nr_matricula: "",
        password: "",
        showPassword: false
    });

    const history = useHistory();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <section class="container grid grid-template-columns">
            <form className='col-1'>
                <img src={Aluno} className='icone-aluno' alt='Aluno' />
                <div className='formulario'>
                    <div className='input-nrMatricula'>
                        <TextField
                            label="Nº de matricula"
                            id="outlined-start-adornment"
                            className='form-controll-1'
                            variant="outlined"
                        />
                    </div>
                    <div className='input-password'>
                        <FormControl
                            className='form-controll-2'
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                Senha
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleChange("password")}
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
                                labelWidth={45}
                            />
                        </FormControl>
                    </div>
                    <div className='button-and-checkbox'>
                        <Button className='button-login'>
                            <p className='titulo-button'>Entrar</p>
                        </Button>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="default" />}
                            label="Lembrar - me"
                            labelPlacement="Lembrar - me"
                            className='checkbox'
                        />
                    </div>
                </div>
                <div className='box-text'>
                    <ul>
                        <Link to='/cadastro' className='cor-primeiro-acesso'>Primeiro Acesso</Link>
                    </ul>
                    <ul>
                        <Link to='/esqueci-minha-senha' className='cor-esqueci-senha'>Esqueci a minha senha</Link>
                    </ul>
                </div>
            </form>
            <div className='col-2'>
                <img src={LogoFatec} className='logoFatec' alt='logoFatec' />
            </div>
        </section>
    );
}

export default Login;