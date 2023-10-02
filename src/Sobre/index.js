import React from 'react';
import Banner from '../componentes/Banner';
import './Sobre.css'
import Rodape from '../componentes/Rodape';
import Botao from '../componentes/Botao';
import { Link } from 'react-router-dom';



const Sobre = () => {
  return (
    <div className="sobre">
      <Banner />

      <h2>Valorante</h2>
      <p>
        Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira 
        pessoa desenvolvido e publicado pela Riot Games,um jogo de tiro tático disputado entre duas equipes com cinco integrantes cada, 
        separadas nos lados Atacante e Defensor.
      </p>
      <div className='botoes'>
        <Botao>
            <a href='https://playvalorant.com/pt-br/'>
                Joagar Valorante
            </a>
        </Botao>
        <Link to="/">
            <Botao>
                Classificacao
            </Botao>
        </Link>
      </div>
      

      <Rodape />
    </div>
  );
};

export default Sobre;