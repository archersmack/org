//import {useState} from "react"
import "./miOrg.css"

const MiOrg = (props) => {
    // Estado --->  Hooks
    // useState una funcionalidad o Hook que muestra el estado de una variable pero que permite actualizarla o modificarla con un evento recibido. Se usa segun la siguiente sintaxis:
    // const [nombreVariable, funcionQueActializa] = useState(valorInicial)
    //const [nombreUsuario, actualizarNombre] = useState("Dario") // Se puede ver en components (F12) en el navegador como un valor es asignado a Hooks

    /*    const [verdaderoFalso, actualizarBooleano] = useState(true)

    const manejarEventoClick = () => {
        console.log("manejarEventoClick", !verdaderoFalso)
        actualizarBooleano(!verdaderoFalso) //el simbolo admiracion asigna el valor contrario como parametro y luego se actualiza en el estado.
        // como el evento es click, cada vez que oprima click hace cambio del valor ente TRUE y FALSE
    }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="./img/botonOrganizacion.png" alt="Imagen organizacion" onClick={manejarEventoClick} />
    </section>
*/

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="./img/botonOrganizacion.png" alt="Imagen organizacion" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg