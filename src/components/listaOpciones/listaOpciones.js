import "./listaOpciones.css"

const ListaOpciones = (props) => {

    //const equiposDrTrabajo = ["Programación", "Front End", "Data Science", "DevOps", "Ux y Diseño", "Móvil", "Innovación y Gestión"]  // Esta lista se reemplaza por props que se herredan desde Apps aFormulario y luego a ListaOpciones

    const manejarCambioValor = (e) => {
        props.actualizarValor(e.target.value)
    }

    // Usar MAP permite recorrer arreglo (array o lista) e insertar codigo HTML como return, SOLO recorre arrreglos, no objetos, ni diccionarios, ni numeros, ni strings pero si puede contener cualquiera de ellos
    // Eso sucede porque  .map es un metodo de los arreglos. Es obligatorio indicar la KEY en la propiedad del TAG donde se va a agregar 
    return <div className="lista-opciones">
                <label>Equipo</label>
                <select value={props.valor} onChange={manejarCambioValor}>
                    <option value="" defaultValue="" disabled hidden >Selecciona un equipo de trabajo</option>
                    
                    {props.equipoDeTrabajo.map( (equipoElegido, index) => {
                        return <option key={index}> {equipoElegido} </option>
                    })}
                </select>
            </div>
// el valor del primer OPTION se asigna de esa forma para que quede como un placeholder, su contenido no se toma como valor ni se muestra en la lista.
}

export default ListaOpciones