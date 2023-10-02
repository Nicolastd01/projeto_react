
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';





function App() {

  const times = [
    {
      nome: 'Loud',
      corPrimaria: '#ffffff',
      corSecundaria: '#000000'
    },
    {
      nome: 'EG',
      corPrimaria: '#FFFFFF',
      corSecundaria: '#FE0000'
    },
    {
      nome: 'DRX',
      corPrimaria: '#FFFFFF',
      corSecundaria: '#34B3F1'
    },
    {
      nome: 'FPX',
      corPrimaria: '#ffffff',
      corSecundaria: '#000000'
    },
    {
      nome: 'TL',
      corPrimaria: '#FFFFFF',
      corSecundaria: '#F32424'
    },
    {
      nome: 'FUT',
      corPrimaria: '#ffffff',
      corSecundaria: '#000000'
    },
    {
      nome: 'T1',
      corPrimaria: '#000000',
      corSecundaria: '#F32424'
    },
  ]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador =>aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />
      
    </div>
  );
}

export default App;
