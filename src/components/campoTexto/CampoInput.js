//import { useState } from 'react';
import "./CampoInput.css"

// Los "props" Son propiedades externas que recibe un componente de React. Gracias a estas propiedades conseguiremos modificar o enviar información a nuestros componentes.
// se puede crear una variable que incluya el contenido del PROPS y modificaciones Ejemplo: linea 6
const CampoInput = (props) => {
    const placeholderModificado = `${props.placeholder}...` 
    //console.log("Las propiedades recibidas son: ", props)

    // DESTRUCTURACION 
    const {type = "text" /*Se asigna valor por dfecto y cambia si encuentra algun valor diferente*/ } = props

    // Ahora usamos el useState para controlar los cambios del contenido de input (value)
    // const [valor, actualizarValor] = useState("") // inicia vacio para que se muestre vacio o solo el placeholder, esta pendiente del cambio del value
    const manejarCambioValor = (e) => {  // se asigna la propiedad onChange al input para que lea el contenido
        //console.log("CambioContenido: ", e.target)  //muestra en consola el lugar o etiqueta donde sucede el cambio (onChange)
        console.log("CambioContenido: ", e.target.value) // muestra en consola el contenido agregado en la etiqueta, ahora se debe enviart al useState para que actualice el valor y lo muestre
        props.actualizarValor(e.target.value)   // Se enlaza con la funcion actulizarValor creada en el componente formulario mediante props
    }

    return <div className="campo-texto">
                <label>{props.titulo}</label>
                <input 
                    placeholder={placeholderModificado} 
                    required={props.required}
                    value={props.valor}
                    onChange={manejarCambioValor}
                    maxLength={50}
                    type={type}
                />
            </div>
}

export default CampoInput

