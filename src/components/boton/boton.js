import "./boton.css"

const Boton = (props) => {
    //console.log(props.children)
    //con PROPS.children va a agregar el contenido que se enuentre como hijo o dentro de }l TAG BOTON en el componente formulario (para el caso el nombre del botón)
    return <button className="boton">{props.children}</button>
}

export default Boton