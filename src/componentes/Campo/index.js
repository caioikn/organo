import './Campo.css';

const Campo = ({ label, placeholder, valor, aoAlterado, obrigatorio = false, type = 'text' }) => {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    );
}

export default Campo;
