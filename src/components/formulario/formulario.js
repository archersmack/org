import "./formulario.css"
import CampoInput from "../campoTexto/CampoInput";
import ListaOpciones from "../listaOpciones/listaOpciones";
import Boton from "../boton/boton";
import { useState } from "react";   // INPUT CONTROLADO --> Desde este componente se controlan los inputs de sus hijos para controlar el estado y la informacion de los mismos
import {v4 as uuid} from "uuid"

const Formulario = (props) => {
    // useState para Colaborador
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    // useState para Colaborador
    const [nombreEquipo, actualizarNombreEquipo] = useState("")
    const [color, actualizarColor] = useState("")


    const manejarEnvioColaborador = (evento) => {
        evento.preventDefault() // Evita que la pagina se recarge por defecto
        console.log("HI hEllo", evento)

        // Crear un objeto(diccionario) que contiene los valores de todos los inputs que permitiran construir la base de datos de cada colaborador creado
        let datosRecopiladosColaborador = {
            idColaborador: uuid(),
            nombre: nombre,     //Se relaciona con las variables actualizadas para que una vez enviadas(onSubmit) se guarde la información
            puesto, // Si solo se deja la clave y no el valor, JavaScript asume que el valor tiene el mismo nombre
            foto: foto,
            equipo
        }
        console.log("La información obtenida del formulario es: ", datosRecopiladosColaborador)
        props.registrarColaborador(datosRecopiladosColaborador)    // La informacion recopilada se envia al padre(Apps) usando props y la funcion que existe en Apps
    }
    const manejarEnvioEquipo = (evento) => {
        evento.preventDefault() // Evita que la pagina se recarge por defecto
        console.log("HI hEllo EQUIPO", evento)

        // Se crea un objeto(diccionario) que contiene los valores de todos los inputs que permitiran construir la base de datos de cada colaborador creado
        let datosRecopiladosEquipo = {
            idEquipo: uuid(),
            nombreEquipo,     //Se relaciona con las variables actualizadas para que una vez enviadas(onSubmit) se guarde la información
            colorDestaque: color
        }
        console.log("La información obtenida del equipo es: ", datosRecopiladosEquipo)
        props.crearEquipo(datosRecopiladosEquipo)    // La informacion recopilada se envia al padre(Apps) usando props y la funcion que existe en Apps
    }
    
    // la funcion que previene el evento se coloca como valor del tipo de evento escuchado
    // EL required si no se coloca, no obliga al campo a ser diligenciado, esto porque la validacion se hace mediante PROPS desde el componente CampoTexto
    return <section className="formulario">
                <form onSubmit = {manejarEnvioColaborador}> 
                    <h2> Rellena el formulario para crear el colaborador:</h2>
                    <CampoInput 
                        titulo="Nombre" placeholder="Ingresar nombre" required
                        valor={nombre}
                        actualizarValor={actualizarNombre}
                    />
                    <CampoInput titulo="Puesto" placeholder="Ingresar puesto" required                 
                        valor={puesto}
                        actualizarValor={actualizarPuesto}
                    />
                    <CampoInput titulo="Foto" placeholder="Ingresar enlace de foto"               
                        valor={foto}
                        actualizarValor={actualizarFoto}
                    />
                    <ListaOpciones
                        valor={equipo}
                        actualizarValor={actualizarEquipo}
                        equipoDeTrabajo={props.equipoDeTrabajo/* Este valor llega desde App */}
                        required
                    />
                    <Boton className="{}">
                        Crear Colaborador
                    </Boton>
                </form>

                <form onSubmit = {manejarEnvioEquipo}> 
                    <h2> Rellena el formulario para crear el Equipo:</h2>
                    <CampoInput 
                        titulo="nombreEquipo" placeholder="Ingresar nombre del nuevo Equipo" required
                        valor={nombreEquipo}
                        actualizarValor={actualizarNombreEquipo}
                    />
                    <CampoInput titulo="colorDestaque" placeholder="Elige un color" required                 
                        valor={color}
                        actualizarValor={actualizarColor}
                        type="color"
                    />
                    <Boton>
                        Crear Equipo
                    </Boton>
                </form>
            </section>
}
    /*Usando props.children --> en el Boton se Agrega todo el contenido del componente Boton porque todo lo que se muestra es hijo de este. (ver componente Boton para más detalle)*/
export default Formulario