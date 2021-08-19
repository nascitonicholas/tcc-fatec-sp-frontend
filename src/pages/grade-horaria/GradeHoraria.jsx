import React from 'react';
import VoltarSair from '../../shared/components/VoltarSair';
import CardPadrao from '../../shared/components/CardPadrao';
import ComputadorImg from '../../assets/estrutura-curricular/computador-desktop.png';
import DestinoImg from '../../assets/estrutura-curricular/destino.png';
import EdificioImg from '../../assets/estrutura-curricular/edificio.png';
import EnergiaHidraulicaImg from '../../assets/estrutura-curricular/energia-hidraulica.png';
import EngenhariaImg from '../../assets/estrutura-curricular/engenharia.png';
import EticaImg from '../../assets/estrutura-curricular/etica.png';
import LedImg from '../../assets/estrutura-curricular/led.png';
import MecanismoImg from '../../assets/estrutura-curricular/mecanismo.png';
import MicroSdImg from '../../assets/estrutura-curricular/micro-sd.png';
import ProjetoImg from '../../assets/estrutura-curricular/projeto.png';
import ReacaoQuimicaImg from '../../assets/estrutura-curricular/reacao-quimica.png';
import SecretariaImg from '../../assets/estrutura-curricular/secretary.png';
import SoldagemImg from '../../assets/estrutura-curricular/soldagem.png';
import TomadaEletricaImg from '../../assets/estrutura-curricular/tomada-eletrica.png';


const GradeHoraria = () => {

  const pages = [
    {name: 'ads-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/321.pdf', description: 'Análise e desenvolvimento de sistemas - Matutino', image: ComputadorImg},
    {name: 'ads-t', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/322.pdf', description: 'Análise e desenvolvimento de sistemas - Vespertino', image: ComputadorImg},
    {name: 'ads-n', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/323.pdf', description: 'Análise e desenvolvimento de sistemas - Noturno', image: ComputadorImg},
    {name: 'secretariado-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/711.pdf', description: 'Automação de escritórios e secretáriado - Matutino', image: SecretariaImg},
    {name: 'secretariado-n', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/713.pdf', description: 'Automação de escritórios e secretáriado - Noturno', image: SecretariaImg},
    {name: 'eletronica-n', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/623.pdf', description: 'Eletrônica industrial - Noturno', image: LedImg},
    {name: 'edificios-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/111.pdf', description: 'Edificios - Matutino', image: EdificioImg},
    {name: 'edificios-n', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/113.pdf', description: 'Edificios - Noturno', image: EdificioImg},
    {name: 'turismo-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/651.pdf', description: 'Gestão e turismo - Matutino', image: DestinoImg},
    {name: 'turismo-t', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/652.pdf', description: 'Gestão e turismo - Vespertino', image: DestinoImg},
    {name: 'hidraulica-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/141.pdf', description: 'Hidráulica e saneamento ambiental - Matutino', image: EnergiaHidraulicaImg},
    {name: 'hidraulica-n', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/143.pdf', description: 'Hidráulica e saneamento ambiental - Noturno', image: EnergiaHidraulicaImg},
    {name: 'eletrica-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/491.pdf', description: 'Instalações elétricas - Matutino', image: TomadaEletricaImg},
    {name: 'materiais-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/441.pdf', description: 'Materiais - Matutino', image: ReacaoQuimicaImg},
    {name: 'mecanica-m-i', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/244.pdf', description: 'Mecânica de precisão - Matutino/Integral', image: MecanismoImg},
    {name: 'microeletronica-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/661.pdf', description: 'Microeletrônica - Matutino', image: MicroSdImg},
    {name: 'pavimentacao-n', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/133.pdf', description: 'Movimento de terra e pavimentação - Noturno', image: EngenhariaImg},
    {name: 'producao-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/221.pdf', description: 'Processos de produção - Matutino', image: EticaImg},
    {name: 'producao-n', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/223.pdf', description: 'Processos de produção - Noturno', image: EticaImg},
    {name: 'projeto-m', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/211.pdf', description: 'Projetos - Matutino', image: ProjetoImg},
    {name: 'projeto-n', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/213.pdf', description: 'Projetos - Noturno', image: ProjetoImg},
    {name: 'soldagem-n', url: 'https://fatec-tcc.s3.sa-east-1.amazonaws.com/grades-horaria/233.pdf', description: 'Soldagem - Noturno', image: SoldagemImg},
  ];

  return (
    <div className='menu-container' >
      <VoltarSair flagVoltar={true} /> 
      <ul>
        {pages.map(page => (
          <CardPadrao name={page.name} image={page.image} url={page.url} key={page.name} description={page.description} />
        ))}
      </ul>
    </div>
  )
}

export default GradeHoraria;