import React, { useEffect } from 'react';

const DetalheOfertasEstagio = () => {

  const vagas = [
    {dataVencimento: "21.04.2021", tipo: "Estágio", numeroVagas: "5", endereco: "Rua Domingos de Morais", horario: "A combinar", remuneracao: "A combinar - mensal", beneficios: "-", atividades: "Analista programador java jr", periodo: "7", conhecimentos: "Logica de programação, Java, SQL Server", linguas: "-", responsavel: "Carina", telefone: "(11) 5536-8999", email: "rh@autbank.com.br", observacao: "Interessados devem enviar curriculo até 29/03/2021."}
  ]

  useEffect(() => {
  //Lógica para c6amar a api e buscar a lista de contatos
  })

  return (
    <div>
      {
       vagas.map(vaga => (
         <div>
           <p><strong>Data de vencimento: </strong>{vaga.dataVencimento}</p>
           <p><strong>Tipo: </strong>{vaga.tipo}</p>
           <p><strong>Número de vagas: </strong>{vaga.numeroVagas}</p>
           <p><strong>Endereço: </strong>{vaga.endereco}</p>
           <p><strong>Horário: </strong>{vaga.horario}</p>
           <p><strong>Remuneração: </strong>{vaga.remuneracao}</p>
           <p><strong>Benefícios: </strong>{vaga.beneficios}</p>
           <p><strong>Atividades a desempenhar: </strong>{vaga.atividades}</p>
           <p><strong>Período: </strong>{vaga.periodo}</p>
           <p><strong>Conhecimentos em informática: </strong>{vaga.conhecimentos}</p>
           <p><strong>Conhecimentos em língua estrangeira: </strong>{vaga.linguas}</p>
           <p><strong>Responsável: </strong>{vaga.responsavel}</p>
           <p><strong>Telefone: </strong>{vaga.telefone}</p>
           <p><strong>E-mail: </strong>{vaga.email}</p>
           <p><strong>Observação: </strong>{vaga.observacao}</p>
         </div>
       )) 
      }
    </div>
  )
}

export default DetalheOfertasEstagio;