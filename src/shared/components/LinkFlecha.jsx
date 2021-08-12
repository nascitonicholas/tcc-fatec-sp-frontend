import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../style/LinkFlecha.scss'

const LinkFlecha = ({ id, title, url }) => {

  return (
    <div className='contato-container' key={id} >
      <a className='flex-row' href={url}>
        <FaArrowRight size={20} color="#e1a546" />
        <p>{title}</p>
      </a>
    </div>
  )

}

export default LinkFlecha;