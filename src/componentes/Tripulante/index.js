import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Tripulante.css';

const Tripulante = ({ tripulante, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(tripulante.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    };

    return (
        <div className='tripulante'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(tripulante.id)} 
            />

            <div className='cabecalho' style={{ backgroundColor: corDeFundo }} >
                <img src={tripulante.imagem} alt={tripulante.nome} />
            </div>

            <div className='rodape'>
                <h4>{tripulante.nome}</h4>
                <h5>{tripulante.cargo}</h5>

                <div className='favoritar'>
                    {tripulante.favorito 
                        ? <AiFillHeart {...propsFavorito} color='#FF0000' /> 
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Tripulante;
