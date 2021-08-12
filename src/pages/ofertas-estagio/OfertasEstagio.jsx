import React from 'react';
import { useHistory } from "react-router-dom";
import './OfertasEstagio.scss';

const OfertasEstagio = () => {

  const history = useHistory();

  function Redirect() {
    history.push('/ofertas-estagio/detalhes-vagas');
  }

  return (
    <div className='ofertas-container flex flex-center flex-column'>
      <h1>CENTRAL DE ESTÁGIOS - AVISOS IMPORTANTES</h1>
      <ol>
        <li>O estágio terá início na empresa somente e tão somente após o trâmite de toda a documentação exigida (Acordo de Cooperação e Termo de Compromisso de Estágio), envolvendo a FATEC-SP e a EMPRESA.</li>
        <li>O número de matrícula, a grade horária e o semestre matriculado devem ser obtidos na Secretaria Geral, através do Atestado de Matrícula (modelo 11.16).</li>
        <li>Lembre-se, estágio não é emprego, é aprendizado. É o período destinado à complementação do processo de ensino, adquirindo experiência e prática na sua área de formação, aumentando assim a sua "empregabilidade".</li>
        <li>A duração do estágio é de no mínimo 1 semestre letivo e no máximo 2 semestres letivos, podendo ser prorrogado com Termo Aditivo.</li>
        <li>As ofertas de estágio são afixadas no quadro de avisos e divulgadas através da internet no site da FATEC-SP. O aluno deve contatar a empresa e agendar entrevista, se a oferta for de seu interesse.</li>
        <li>Para outras informações não deixe de ler o Manual do Estagiário.</li>
        <li>Mais informações, acesse nosso site através do link SEREE - Seção de Estágios e Relações Empresariais.</li>
      </ol>
      <button  type="button" onClick={Redirect} >Verificar ofertas de estágio</button>
    </div>
  );
}



export default OfertasEstagio;