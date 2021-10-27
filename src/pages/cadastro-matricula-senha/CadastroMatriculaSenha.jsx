import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import VoltarSair from '../../shared/components/VoltarSair';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { apiBd, apiUser } from '../../services/api';
import Usuario from '../../models/Usuario';
import './CadastroMatriculaSenha.scss'

const CadastroLoginSenha = () => {

    localStorage.removeItem("tituloHeader");
    localStorage.setItem('tituloHeader', 'Primeiro Acesso')

    const history = useHistory();

    const location = useLocation();
    const flagMenuPrincipal = location.pathname === '/cadastro-login-senha' ? true : false;
    const tituloButton = flagMenuPrincipal === true ? 'Salvar' : 'Alterar';
    const [values, setValues] = React.useState({
        nrMatricula: "",
        senha: "",
        confirmaSenha: "",
        oldSenha: "",
        newSenha: "",
        error: "",
        messageSucesso: ""
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

    const handleClickShowPasswordOld = () => {
        setValues({ ...values, showOldSenha: !values.showOldSenha });
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownPasswordOld = (event) => {
        event.preventDefault();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (flagMenuPrincipal) {

            if (!values.nrMatricula || !values.senha) {
                setValues({ ...values, error: "Preencha matrícula e senha para continuar!" })
            }
            else if (!values.confirmaSenha) {
                setValues({ ...values, error: "Necessário confirmar a senha para continuar!" })
            }
            else if (values.senha !== values.confirmaSenha) {
                setValues({ ...values, error: "As senhas diferem. Por favor verificar!" })
            }
            else {

                try {
                    const response = await apiBd.get('/usuarios/' + values.nrMatricula);
                    console.log(response)
                    if (response.status === 200) {
                        setValues({ ...values, error: "Usuário já cadastro. Realizar Login!" })
                    }
                } catch (error) {

                }

                const dadosMatriculaSenha = {
                    nrMatricula: values.nrMatricula,
                    senha: values.senha
                }
                localStorage.setItem('dadosMatriculaSenha', JSON.stringify(dadosMatriculaSenha));
                history.push('/cadastro');
            }

        } else {


            if (values.oldSenha === null || values.oldSenha === "") {
                setValues({ ...values, error: "Necessário prencher a senha atual!" })
            }
            else if (values.newSenha === null || values.newSenha === "") {
                setValues({ ...values, error: "Necessário preencher a nova senha desejada!" })
            }
            else if (values.confirmaSenha === null || values.confirmaSenha === "") {
                setValues({ ...values, error: "Necessário confirmar a senha para continuar!" })
            }
            else if (values.newSenha !== values.confirmaSenha) {
                setValues({ ...values, error: "As senhas diferem. Por favor verificar!" })
            }
            else {
                var aluno = Usuario.getUsuario();

                const data = {
                    nrMatricula: aluno.matricula,
                    senha_atual: values.oldSenha,
                    nova_senha: values.newSenha
                }

                try {
                    const response = await apiUser.put('/usuario/atualizarpassword', data);

                    alert("Senha Atualizada com Sucesso")

                    history.push('/menu-principal')

                } catch (error) {

                    setValues({ ...values, error: "Senha atual incorreta!" })
                }
            }
        }

    }

    return (
        <form>
            <VoltarSair flagVoltar={false} />
            <div className='containerfather'>

                {
                    flagMenuPrincipal &&
                    <div className='item item1'>

                        <InputLabel htmlFor="nrMatricula" className='labeltext'>
                            Matricula
                        </InputLabel>
                        <TextField
                            id="nrMatricula"
                            onChange={handleChange("nrMatricula")}
                            variant="outlined"
                            className='input-text'
                        />
                    </div>
                }
                {
                    !flagMenuPrincipal &&
                    <div className='item item1'>

                        <InputLabel htmlFor="oldSenha" className='labeltext'>
                            Senha Atual
                        </InputLabel>
                        <OutlinedInput
                            id="oldSenha"
                            type={values.showOldSenha ? "text" : "password"}
                            value={values.oldSenha}
                            onChange={handleChange("oldSenha")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordOld}
                                        onMouseDown={handleMouseDownPasswordOld}
                                        edge="end"
                                    >
                                        {values.showOldSenha ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            className='input-text'
                        />
                    </div>
                }
                {
                    flagMenuPrincipal &&
                    <div className='item'>
                        <InputLabel htmlFor="senha" className='labeltext'>
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
                            className='input-text'
                        />
                    </div>
                }
                {
                    !flagMenuPrincipal &&
                    <div className='item'>
                        <InputLabel htmlFor="newSenha" className='labeltext'>
                            Nova Senha
                        </InputLabel>
                        <OutlinedInput
                            id="newSenha"
                            type={values.showPassword ? "text" : "password"}
                            value={values.newSenha}
                            onChange={handleChange("newSenha")}
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
                            className='input-text'
                        />
                    </div>
                }

                {
                    flagMenuPrincipal &&
                    <div className='item item3'>

                        <InputLabel htmlFor="confirmarSenha" className='labeltext'>
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
                            className='input-text'

                        />
                    </div>

                }

                {
                    !flagMenuPrincipal &&
                    <div className='item item3'>

                        <InputLabel htmlFor="confirmarSenha" className='labeltext'>
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
                            className='input-text'

                        />
                    </div>
                }
            </div>
            <div className='container-button'>
                <Button variant="contained" className='button-salvar' onClick={handleSubmit}>
                    <p className='titulo-button'>{tituloButton}</p>
                </Button>
            </div>
            {values.error && <p className="flex flex-justify-center msg_error">{values.error}</p>}
            {values.messageSucesso && <p className="flex flex-justify-center msg_error">{values.messageSucesso}</p>}
        </form>


    )

}

export default CadastroLoginSenha;