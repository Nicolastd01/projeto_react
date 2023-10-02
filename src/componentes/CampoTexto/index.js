import './CampoTexto.css'

const CampoTexto = (props) => {
    

    function aoDigitando(evento) {
        props.aoAlterado(evento.target.value)
        
    }
    
    return(


        <div className="campoTexto">
            <label>
                {props.label}
            </label>
            <input valor={props.valor}  onChange={aoDigitando} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
}

export default CampoTexto