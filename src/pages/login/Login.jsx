import React from 'react';
import { useHistory } from 'react-router-dom';
import Aluno from '../../assets/login/aluno.png';
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
import { apiUser } from '../../services/api';
import Usuario from '../../models/Usuario';
import './Login.scss'

const Login = () => {

    const history = useHistory();
    window.localStorage.clear();

    const [values, setValues] = React.useState({
        nrMatricula: "",
        password: "",
        showPassword: false,
        error: ""
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

        const data = {
            nrMatricula: values.nrMatricula,
            senha: values.password
        }

        if (!data.nrMatricula || !data.senha) {
            setValues({ ...values, error: "Preencha matrícula e senha para continuar!" })
        }
        else {

            try {

                const response = await apiUser.post('/usuario/login', data)
                const user = response.data.data;
                var alunoLogado = new Usuario(
                    user.nome,
                    user.email,
                    user.curso.nome,
                    user.curso.id,
                    user.turno.nome,
                    user.turno.id,
                    user.nrMatricula,
                    "FATEC SÃO PAULO",
                    user.email_pessoal,
                    user.nome_mae,
                    user.nome_pai,
                    user.cpf,
                    user.rg,
                    user.certificadoMilitar,
                    user.numeroTitulo,
                    user.zonaTitulo,
                    user.telefone,
                    user.celular,
                    user.enderecos[0].tipo_endereco,
                    user.enderecos[0].logradouro,
                    user.enderecos[0].numero,
                    user.enderecos[0].complemento,
                    user.enderecos[0].bairro,
                    user.enderecos[0].municipio,
                    user.enderecos[0].estado.id,
                    user.enderecos[0].cep,
                    user.tokenAutenticacao);

                localStorage.setItem('alunoLogado', JSON.stringify(alunoLogado));

                history.push('/menu-principal')
                window.location.reload()

            } catch (error) {
                console.log(error)
                setValues({ ...values, error: error.response.data.message })
            }
        }
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
                    {values.error && <p className="flex flex-justify-center msg_error">{values.error}</p>}
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
                        <a href='/cadastro-login-senha' className='primeiro-acesso' >Primeiro Acesso</a>
                    </ul>
                    <ul>
                        <a href='/esqueci-minha-senha' className='esqueci-senha'>Esqueci a minha senha</a>
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