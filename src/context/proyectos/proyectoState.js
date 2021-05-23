/*
    Aquí vamos a definir el State que va a tener y tambien van a estar
    las diferentes funciones con Dispatch hacía los types.
*/
import { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
// Como el archivo se llama index.js no es necesario poner el nombre.
// Cuando son varías importanciones se recomiend el siguiente formato.
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    PROYECTO_ERROR,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types/Index';

import clienteAxios from '../../config/axios';

/*
    Este vendra siendo el state inicial de todo lo que sera la administracion
    de nuestro proyecto, tanto agregar, eliminar o modificar algun dato.
*/
const ProyectoState = props => {

    const initialState = {
        // Los id los debemos colocar por lo menos durante el Front-End cuando manejemos el Back-End
        // Ya luego MongoDB nos agregara los ID's
        // Tendremos este array vacio y se mostraran hasta llamemos al dispatch.
        proyectos : [],
        formulario : false,
        errorformulario : false,
        proyecto : null,
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer( proyectoReducer, initialState );

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        /*
            Aquí vamos a notar la importancia del dispatch porque con este vamos
            a evaluar el type que importamos y estara atado al Switch que tenemos
            en proyectoReducer.js, con esto cambiaremos el State.
            En realidad lo que cambia el State es el Switch del Reducer, aquí
            solamente escribimos las funciones que manda a llamar al Reducer.
        */
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = async () => {
        /*
            Siempre que algo que tome como parametro tambien se tomara como
            el payload.
        */
        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }

    }

    // Agregar nuevo proyecto
    const agregarProyecto = async proyecto => {

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            console.log(resultado);
            
            // Insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })

        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }

    }

    // Validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    // Selecciona el Proyecto que el usuario dio Click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Eliminar un proyecto
    const eliminarProyecto = async proyectoId => {
        try {
            // Siempre que hagas movimientos con la base de datos
            // Se recomienda colocar un TRY - CATCH
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;