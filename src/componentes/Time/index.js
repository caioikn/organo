import hexToRgba from 'hex-to-rgba';
import Tripulante from '../Tripulante';
import './Time.css';

const Time = ({ tripulacao, tripulantes, aoDeletar, mudarCor, aoFavoritar }) => {
    const css = { backgroundColor: hexToRgba(tripulacao.cor, '0.6') };

    return (
        tripulantes.length > 0 &&
        <section className='time' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, tripulacao.id)} value={tripulacao.cor} type="color" className='input-cor' />

            <h3 style={{ borderColor: tripulacao.cor }}>{tripulacao.nome}</h3>
            
            <div className='tripulantes'>
                {tripulantes.map(tripulante => {
                    return (
                        <Tripulante 
                            corDeFundo={tripulacao.cor} 
                            key={tripulante.nome} 
                            tripulante={tripulante}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Time;
