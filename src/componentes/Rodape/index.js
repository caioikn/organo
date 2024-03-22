import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <a href="https://www.facebook.com/CaioIkena/" target='_blank'>
                        <img src="./imagens/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#https://twitter.com/iknzin" target='_blank'>
                        <img src="./imagens/tw.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/caioikn" target='_blank'>
                        <img src="./imagens/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>
            <h5>Desenvolvido por Caio.</h5>
        </footer>
    );
}

export default Rodape;
