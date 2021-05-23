import { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Obtener proyectos cuando se cargue este component
    // Antes del useEffect nunca debe haber un return.
    useEffect(() => {

        // Si hay un error
        if ( mensaje ) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    // Revisar si proyectos tiene contenido
    if ( proyectos.length === 0 ) return <p>No hay proyectos, comienza creando uno.</p>;

    return ( 

        <ul className="listado-proyectos">

        { alerta ? (
            <div className={`alerta ${ alerta.categoria }`}>{ alerta.msg }</div>
        ) : null }

                {proyectos.map(proyecto => (
                        <Proyecto
                            proyecto={proyecto}
                        key={proyecto._id}
                        />
                ))}
        </ul>

    );
}

export default ListadoProyectos;