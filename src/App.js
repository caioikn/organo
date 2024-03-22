import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BiSolidAddToQueue } from 'react-icons/bi'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const [tripulacoes, setTripulacoes] = useState([
    {
      id: uuidv4(),
      nome: 'Chapéus de Palha',
      cor: '#596B5D'
    },
    {
      id: uuidv4(),
      nome: 'Piratas do Ruivo',
      cor: '#ECF4E7'
    },
    {
      id: uuidv4(),
      nome: 'Piratas da Big Mom',
      cor: '#596B5D'
    },
    {
      id: uuidv4(),
      nome: 'Piratas das Cem Feras',
      cor: '#ECF4E7'
    },
    {
      id: uuidv4(),
      nome: 'Piratas do Barba Branca',
      cor: '#596B5D'
    },
    {
      id: uuidv4(),
      nome: 'Piratas do Barba Negra',
      cor: '#ECF4E7'
    },
    {
      id: uuidv4(),
      nome: 'Donquixote Family',
      cor: '#596B5D'
    },
  ]);

  const [tripulantes, setTripulantes] = useState([]);
  const [esconder, setEsconder] = useState({display: 'block'});
  const [listaTripulantes, setListaTripulantes] = useState([]);

  const aoNovoTripulanteAdicionado = (tripulante) => {
    const novoTripulante = { ...tripulante, id: uuidv4(), favorito: false };

    setTripulantes([...tripulantes, novoTripulante]);
  };

  function deletarTripulante(id) {
    setTripulantes(tripulantes.filter(tripulante => tripulante.id !== id));
  }

  function mudarCorDaTripulacao(cor, id) {
    setTripulacoes(tripulacoes.map(tripulacao => {
      if (tripulacao.id === id) {
        tripulacao.cor = cor;
      }

      return tripulacao;
    }));
  } 

  function cadastrarTripulacao(novaTripulacao) {
      setTripulacoes([...tripulacoes, { ...novaTripulacao, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setTripulantes(tripulantes.map(tripulante => {
      if (tripulante.id === id) tripulante.favorito = !tripulante.favorito;

      return tripulante;
    }));
  } 

  function esconderFormulario() {
    if (esconder.display === 'block') {
      setEsconder({display: 'none'});
    } else {
      setEsconder({display: 'block'});
    }
  }

  return (
    <div className="App">
      <Banner />

      <Formulario 
        style={esconder}
        tripulacoes={tripulacoes.map(tripulacao => tripulacao.nome)} 
        aoTripulanteCadastrado={tripulante => aoNovoTripulanteAdicionado(tripulante)}
        cadastrarTripulacao={cadastrarTripulacao}
      />     
            
      <section className='organizacao'>
          <h2>Minha Organização</h2>       

          <BiSolidAddToQueue 
              className='esconder' 
              size={80} 
              style={{ color: '#576C5D' }}
              onClick={() => {esconderFormulario()}} 
          />
      </section> 

      {tripulacoes.map((tripulacao, indice) => 
          <Time 
            mudarCor={mudarCorDaTripulacao}
            key={indice} 
            tripulacao={tripulacao}
            tripulantes={tripulantes.filter(tripulante => tripulante.time === tripulacao.nome)}
            aoDeletar={deletarTripulante}
            aoFavoritar={resolverFavorito}
          />
      )}

      <Rodape />
    </div>
  );
}

export default App;
