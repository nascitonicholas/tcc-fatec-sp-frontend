import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import VoltarSair from '../../shared/components/VoltarSair';
import './Contatos.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const secoesContatos = [
  {title: 'Secretaria Acadêmica', contatos: [{subtitle: 'Seção de alunos', telefone: '3322-2213', email: 'secaluno@fatecsp.br'}, {subtitle: 'Seção de ex-alunos', telefone: '3322-2213', email: 'secex-aluno@fatecsp.br'}]},
  {title: 'Secretaria Acadêmica', contatos: [{subtitle: 'Seção de alunos', telefone: '3322-2213', email: 'secaluno@fatecsp.br'}, {subtitle: 'Seção de ex-alunos', telefone: '3322-2213', email: 'secex-aluno@fatecsp.br'}]},
  {title: 'Secretaria Acadêmica', contatos: [{subtitle: 'Seção de alunos', telefone: '3322-2213', email: 'secaluno@fatecsp.br'}, {subtitle: 'Seção de ex-alunos', telefone: '3322-2213', email: 'secex-aluno@fatecsp.br'}]},
  {title: 'Secretaria Acadêmica', contatos: [{subtitle: 'Seção de alunos', telefone: '3322-2213', email: 'secaluno@fatecsp.br'}, {subtitle: 'Seção de ex-alunos', telefone: '3322-2213', email: 'secex-aluno@fatecsp.br'}]},
  {title: 'Secretaria Acadêmica', contatos: [{subtitle: 'Seção de alunos', telefone: '3322-2213', email: 'secaluno@fatecsp.br'}, {subtitle: 'Seção de ex-alunos', telefone: '3322-2213', email: 'secex-aluno@fatecsp.br'}]},
  {title: 'Secretaria Acadêmica', contatos: [{subtitle: 'Seção de alunos', telefone: '3322-2213', email: 'secaluno@fatecsp.br'}, {subtitle: 'Seção de ex-alunos', telefone: '3322-2213', email: 'secex-aluno@fatecsp.br'}]},
  {title: 'Secretaria Acadêmica', contatos: [{subtitle: 'Seção de alunos', telefone: '3322-2213', email: 'secaluno@fatecsp.br'}, {subtitle: 'Seção de ex-alunos', telefone: '3322-2213', email: 'secex-aluno@fatecsp.br'}]},
  {title: 'Secretaria Acadêmica', contatos: [{subtitle: 'Seção de alunos', telefone: '3322-2213', email: 'secaluno@fatecsp.br'}, {subtitle: 'Seção de ex-alunos', telefone: '3322-2213', email: 'secex-aluno@fatecsp.br'}]},
  {title: 'Secretaria Acadêmica', contatos: [{subtitle: 'Seção de alunos', telefone: '3322-2213', email: 'secaluno@fatecsp.br'}, {subtitle: 'Seção de ex-alunos', telefone: '3322-2213', email: 'secex-aluno@fatecsp.br'}]},
];
const Contatos = () => {

  useEffect(() => {
  //Lógica para chamar a api e buscar a lista de contatos
  });

  const classes = useStyles();

  return (
    <div className='flex flex-column' >
      <VoltarSair flagVoltar={false} /> 
      {
        secoesContatos.map(secaoContato => (
          <div className='flex-row' >
            <FaArrowRight size={25} color="#264653" />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{secaoContato.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {
                    secaoContato.contatos.map(contato => (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className={classes.heading}>{contato.subtitle}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <div>
                              <FaPhoneAlt size={32} color="#264653" />
                              <p>{contato.telefone}</p>
                            </div>
                            <div>
                              <FaPhoneAlt size={32} color="#264653" />
                              <p>{contato.email}</p>
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))
                  }
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))
      }
    </div>
  );
}

export default Contatos;