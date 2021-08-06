import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Aluno from '../../assets/login/aluno.png';
import './Login.scss'
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Login = () => {

    const history = useHistory();

    const [values, setValues] = React.useState({
        nrMatricula: "",
        password: "",
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.clear();

        /*Login Provisorio*/
        const alunoLogado = {
            nome: 'Fulano',
            email: 'ciclano@gmail.com',
            curso: 'Analise e Desenvolvimento de Sistemas',
            periodo: 'Noite',
            matricula: '18100548',
            campus: 'SÃO PAULO'
        }

        localStorage.setItem('alunoLogado', JSON.stringify(alunoLogado))

        /*Api de Login*/

        history.push('/menu-principal')
        window.location.reload()


    }

    return (
        <section className="container grid grid-template-columns">
            <form className='col-1'>
                <img src={Aluno} className='icone-aluno' alt='Aluno' />
                <div className='formulario'>
                    <div className='input-nrMatricula'>
                        <TextField
                            label="Nº de matricula"
                            id="outlined-start-adornment"
                            className='flex flex-wrap form-controll-1'
                            variant="outlined"
                            onChange={handleChange("nrMatricula")}
                        />
                    </div>
                    <div className='input-password'>
                        <FormControl
                            className='flex flex-wrap form-controll-2'
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
                        <Button variant="contained" className='button-login' onClick={handleSubmit}>
                            <p className='titulo-button'>Entrar</p>
                        </Button>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="default" />}
                            label="Lembrar-me"
                            className='checkbox'
                        />
                    </div>
                </div>
                <div className='box-text'>
                    <ul>
                        <Link to='/cadastro' className='primeiro-acesso'>Primeiro Acesso</Link>
                    </ul>
                    <ul>
                        <Link to='/esqueci-minha-senha' className='esqueci-senha'>Esqueci a minha senha</Link>
                    </ul>
                </div>
            </form>
            <div className='col-2'>
                <div className='component-logoFatec'>
                    <h1 className='fatec'>Fatec</h1>
                    <p className='estado'>São Paulo</p>
                </div>
            </div>
        </section>
    );
}

export default Login;