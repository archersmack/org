import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './components/header/header.js';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/miOrg/miOrg';
import Equipo from './components/equipo/Equipo';
import Footer from './components/footer/footer.jsx';


function App() {

  // ============== HOOKS:ESTADOS ==============
  // Se usa el useState para controlar el esatdo, sintaxis así: --> const [nombreVariable, funcionQueActializa] = useState(valorInicial)
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  //const [colaboradores, actualizarColaborador] = useState([]) // Se puede inicializar con un arreglo vacio y luego se va llenando la lista con nuevos objetos, o se puede crear unos valores de inicio (constrtuctor)
  const [colaboradores, actualizarColaborador] = useState([
    {
      idColaborador: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      favorito: false
    },
    {
      idColaborador: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      favorito: false
    },
    {
      idColaborador: uuid(),
      equipo: "Ux y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      favorito: false
    },
    {
      idColaborador: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      favorito: false
    },
    {
      idColaborador: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      favorito: false
    }
  ])
  const [equiposDeTrabajo, actualizarEquipo] = useState([
    {
      idEquipo: uuid(),
      nombreEquipo: "Programación",
      colorFondo: "#D9F7E9",
      colorDestaque: "#57C278"
    },
    {
      idEquipo: uuid(),
      nombreEquipo: "Front End",
      colorFondo: "#E8F8FF",
      colorDestaque: "#82CFFA"
    },
    {
      idEquipo: uuid(),
      nombreEquipo: "Data Science",
      colorFondo: "#F0F8E2",
      colorDestaque: "#A6D157"
    },
    {
      idEquipo: uuid(),
      nombreEquipo: "DevOps",
      colorFondo: "#FDE7E8",
      colorDestaque: "#E06B69"
    },
    {
      idEquipo: uuid(),
      nombreEquipo: "Ux y Diseño",
      colorFondo: "#FAE9F5",
      colorDestaque: "#DB6EBF"
    },
    {
      idEquipo: uuid(),
      nombreEquipo: "Móvil",
      colorFondo: "#FFF5D9",
      colorDestaque: "#FFBA05"
    },
    {
      idEquipo: uuid(),
      nombreEquipo: "Innovación y Gestión",
      colorFondo: "#FFEEDF",
      colorDestaque: "#FF8A29"
    }
  ]) //  <-- Lista equipos de trabajo que contiene para cada uno nombreEquipo, colorFondo y colorDestaque


  //Utilizando el setState React sabe que el código puede cambiar, y una vez este código es cambiado, React actualiza la pantalla por nosotros.
  // Luego se asigna el ternario dentro del codigo (ver despues del Header)
  // TERNARIO --> Si condiciónSeCumple ? seMuestra  : noSeMuestra 


  // ============== QUITAR/COLOCAR FORMULARIO ==============
  const cambiarMostrar = () => {    // se crea la funcion que va a modificar el valor del useState y se envia el valor como PROPS al componente que va a realizar la modificacion ver componente MyOrg en el codigo de App
    actualizarMostrar(!mostrarFormulario)
  }


  // ============== REGISTRAR COLABORADORES ==============
  const registrarColaborador = (nuevoColaborador) => {
    console.log("El colaborador agregado es: ", nuevoColaborador)
    actualizarColaborador([...colaboradores, nuevoColaborador])  // Se realiaz un SPREAD OPERATOR (...) que copia los datos desde COLABORADOR y los asigna a la variable COLABORADORES que actualiza la lista
  }


  // ============== ELIMINAR COLABORADOR ============== 
  const eliminarColaborador = (idColab) => {
    console.log("Adiós colaborador", idColab)
    const colaboradoresDespuesDeEliminar = colaboradores.filter((verificandoColaborador) => { return verificandoColaborador.idColaborador !== idColab }) //Retorna una nueva lista con los colaboradores que no tenan el id eliminado y luego se actualiza en el useStatte de colaborador para que no lo muestre
    actualizarColaborador(colaboradoresDespuesDeEliminar)
  }


  // ============== CREAR NUEVO EQUIPO ==============
  const crearEquipo = (nuevoEquipo) => {
    console.log("El equipo agregado es: ", nuevoEquipo)
    actualizarEquipo([...equiposDeTrabajo, nuevoEquipo])
  }


  // ============== PERSONALIZAR COLOR ============== 
  const actualizarColor = (nuevoColor, idEquipo) => {
    console.log(nuevoColor, idEquipo)
    const equipoActualizado = equiposDeTrabajo.map((equipo) => {
      if (equipo.idEquipo === idEquipo) {
        equipo.colorDestaque = nuevoColor
      }

      return equipo
    })
    actualizarEquipo(equipoActualizado) // El nuevo color actualiza el valor de colorFondo usando useState, se envia el listado completo del equipo actualizado con el nuevo color
  }


  // ============== DAR FAVORITO A COLABORADOR ============== 
  // El método MAP nos regresa un NUEVO arreglo o arreglo modificado, a partir de un arreglo base.
  const asignarFavorito = (nombre, idColab) => {
    console.log("Favorito para ", nombre, idColab)
    const colaboradorDespuesDeFavorito = colaboradores.map((cadaColaborador) => {
      if (cadaColaborador.idColaborador === idColab) {
        cadaColaborador.favorito = !cadaColaborador.favorito
      }
      return cadaColaborador
    })
    actualizarColaborador(colaboradorDespuesDeFavorito)
  }


  return (
    // COmentarios para Header -->      //Tres formas de llamar un componente, ejemplo con el componente Header:
          // {Header()}
          // <Header></Header>
          // <Header />
    // Comentarios para Formulario -->  // TERNARIO --> Si condiciónSeCumple ? seMuestra  : noSeMuestra     // Se usa para mostrar o quitar el formulario 
    // Comentarios para EQuipo -->      // se usa FILTER, que se plantea similar a un TERNARIO, para mostrar el colaborador en una sola categoria --> Si equipo del colaborador registrado es iugal al nombre del equipo creado, mostrar card (ver dentro de Equipo/colaboradores)
    <div>
      <Header />

      {mostrarFormulario === true
        ? <Formulario
          equipoDeTrabajo={equiposDeTrabajo.map((Equipo) => { return Equipo.nombreEquipo })}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
        : < /*Campos vacios (<></>) que no asignan ningun tag o valor al HTML*/ ></>}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equiposDeTrabajo.map((equipoElegido) => {
          return <Equipo
            key={equipoElegido.nombreEquipo}
            datos={equipoElegido}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipoElegido.nombreEquipo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            asignarFavorito={asignarFavorito}
          />
        })
      }

      <Footer />

    </div>
  );
}

export default App;

/* **************** Virtual DOM ****************

Para entender cómo React consigue ser una buena opción para desarrollar Interfaces Gráficas(User Interface), debemos entender que todos los navegadores van a leer tu código HTML y generar una representación en forma de árbol ( imagina tu árbol genealógico).

De esta manera, conseguimos ver como los elementos/etiquetas se relacionan entre sí. Es a partir de este árbol que React puede saber que sección ha tenido alguna actualización y poder realizar su magia generando algo que se conoce como Virtual DOM.

Puntos importantes basados en w3schools

  - En lugar de manipular el DOM del navegador directamente, React crea un DOM virtual en memoria. Donde realiza toda la manipulación necesaria antes de realizar los cambios del DOM en el navegador.
  - React solo cambia lo que necesita ser actualizado.
  - React encuentra que cambios se han realizado y a partir de eso actualiza solo lo necesario.
*/