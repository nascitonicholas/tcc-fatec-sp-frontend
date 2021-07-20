import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Aluno from '../../assets/login/aluno.png';
import LogoFatec from '../../assets/logoFatec.png';
import './style.scss'

const Login = () => {

    const history = useHistory();


    return (
        <div className='flex flex-direction'>
            <form className='form'>
                <img src={Aluno} alt='Aluno' />

                <div className='box-text'>
                    <ul>
                        <Link to='cadastro' className='cor-primeiro-acesso'>Primeiro Acesso</Link>
                    </ul>
                    <ul>
                        <Link to='/esqueci-minha-senha' className='cor-esqueci-senha'>Esqueci a minha senha</Link>
                    </ul>
                </div>

            </form>
            <div className='box-logo'>
                <img src={LogoFatec} alt='Logo Fatec' />
            </div>
        </div>
    );


}

export default Login;