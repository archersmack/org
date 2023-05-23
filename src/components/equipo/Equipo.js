import "./Equipo.css"
import Colaborador from "../Colaborador/colaborador"
import hexToRgba from "hex-to-rgba"

// Con el uso de props puedo insertar desde una lista o arreglo valores de estilo CSS donde el valor del estilo va a estar relacionado con el valor del arreglo
const Equipo = (props) => {

    /* 
    return <section className="equipo" style={{background: props.datos.colorFondo}}>
        <h3 style={{borderColor: props.datos.colorDestaque }}>{props.datos.nombreEquipo}</h3>
        <div className="colaboradores"></div>
    </section> */

    //Lo anterior, para que se vea más organizado, se puede trabajar de la siguiente manera (DESTRUCTURAZION):

    const {/*colorFondo,*/ colorDestaque, nombreEquipo, idEquipo} = props.datos // Para reemplazar el nombre de la constante en todas las partes donde antes se escribia props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, asignarFavorito} = props
    
    // Al asignar un TERNARIO para verificar la longitud del equipo, se muestra o no la section de equipo
    return  < >
        {
            colaboradores.length > 0 
            ?   <section className="equipo" style={{background: hexToRgba(colorDestaque, 0.45) /*colorFondo <-- Antes tenia asignado este color*/}}>
                    <input 
                        type="color" 
                        className="input-color" 
                        style={{background: "none" /*colorFondo <-- Antes tenia asignado este color*/}} 
                        value={colorDestaque} 
                        onChange={(evento) => {actualizarColor(evento.target.value, idEquipo)/*Se envian los dos parametros a la funcion actualizarColor en App*/}}/>
                    <h3 style={{borderColor: colorDestaque }}>{nombreEquipo}</h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map((datosColaborador, index) => <Colaborador 
                                                                                key={index} 
                                                                                datos={datosColaborador}
                                                                                colorDestaque={colorDestaque}
                                                                                eliminarColaborador={eliminarColaborador}
                                                                                asignarFavorito={asignarFavorito}
                                                                            /> )
                        }

                    </div>
                    
                </section>
            :   <></>
        }
    </>
}

export default Equipo