import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTripulacao, setNomeTripulacao] = useState('');
    const [corTripulacao, setCorTripulacao] = useState('#000000');
    const [listaTripulantes, setListaTripulantes] = useState([]);

    const aoSalvar = (evento) => {
        evento.preventDefault();
        
        props.aoTripulanteCadastrado({
            nome,
            cargo,
            imagem,
            time
        });

        const tripulanteAtual = {
            nome,
            cargo,
            imagem,
            time
        }; 

        const novaListaTripulantes = [...listaTripulantes, tripulanteAtual];
        setListaTripulantes(novaListaTripulantes);

        localStorage.setItem('tripulante', JSON.stringify(novaListaTripulantes));

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    return (
        <section className='formulario' style={ props.style }>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do tripulante.</h2>

                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Tripulação" 
                    itens={props.tripulacoes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>
            </form>

            <form onSubmit={(evento) => {
                evento.preventDefault();
                props.cadastrarTripulacao({ nome: nomeTripulacao, cor: corTripulacao });

                setNomeTripulacao('');
                setCorTripulacao(corTripulacao);
            }}>
                <h2>Preencha os dados para criar uma nova tripulação.</h2>

                <Campo 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome da tripulação" 
                    valor={nomeTripulacao}
                    aoAlterado={valor => setNomeTripulacao(valor)}
                />
                <Campo 
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    valor={corTripulacao}
                    aoAlterado={valor => setCorTripulacao(valor)}
                    type='color'
                />

                <Botao>
                    Criar uma nova tripulação
                </Botao>
            </form>       
        </section>  
    );
}

export default Formulario;
