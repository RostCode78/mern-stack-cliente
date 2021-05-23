import { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto sleccionado
    if ( !proyecto ) return <h2>Selecciona un proyecto</h2>;

    // Array Destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id);
    }

    return ( 
        <Fragment>
            <h2 className="titulo-listado-tareas">Proyecto: { proyectoActual.nombre }</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ?(<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasproyecto.map(tarea => (
                            
                                <Tarea
                                    key={tarea._id}
                                    tarea={tarea}
                                />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={ onClickEliminar }
            >
                Emilinar Proyecto &times;
            </button>
        </Fragment>
    );
}

export default ListadoTareas;