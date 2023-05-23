import "./colaborador.css"
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai"

const Colaborador = (props) => {

    // Se DESTRUCTURAN o simplifican los nombres
    const {nombre, puesto, foto, idColaborador, favorito} = props.datos
    const {colorDestaque, eliminarColaborador, asignarFavorito} = props

    return <div className="colaborador">
                <div className="encabezado" style={{background: colorDestaque}}>
                    <img src={foto} alt={nombre}/>
                </div>
                <div className="info">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>
                    <p>Código Usuario:</p>
                    <p>{idColaborador}</p>
                    <AiFillCloseCircle className="eliminar" onClick= {() =>{eliminarColaborador (idColaborador) /*Con el onCLick se activa la funcion eliminarColaborador que se créo en Apps
                                                                        El icono se importa desde react-icons y se utiliza como un objeto. 
                                                                        /*Se usa arrowFunction para evitar que se ejecute la funcion cuando se recarge la pagina. Utilizando esta sintaxis pretendes pasar el resultado de la función y no la función que debería ser ejecutada. Así, el componente será eliminado una vez renderizado(ejecutada la pagina).*/ }}/>
                    {favorito ? <AiFillHeart color="red" onClick={() => {asignarFavorito(nombre, idColaborador)}}/> : <AiOutlineHeart onClick={() => {asignarFavorito(nombre, idColaborador)}}/>}
                </div>
            </div>
}   

export default Colaborador