/*
    En este script vamos a definir una serie de acciones, estas acciones usualmente describe
    lo que va pasando en la aplicacion.
    Por ejemplo: Login de usuario y si el Login fue correcto o incorrecto dependiendo esas
    acciones puedes ir ejecutando ciertas partes del codigo.
    Al principio puede ser dificil entender la utilidad pero una vez que se van manejando
    en mas proyectos podemos darnos cuenta que si ayudan bastante.
*/

export const FORMULARIO_PROYECTO = 'FORMULARIO_PROYECTO';
// Como buena practica se recomienda colocar dos palabras como minimo y en mayusculas.
export const OBTENER_PROYECTOS = 'OBTENER_PROYECTOS';
export const AGREGAR_PROYECTO = 'AGREGAR_PROYECTO';
export const VALIDAR_FORMULARIO = 'VALIDAR_FORMULARIO';
export const PROYECTO_ACTUAL = 'PROYECTO_ACTUAL';
export const ELIMINAR_PROYECTO = 'ELIMINAR_PROYECTO';
export const PROYECTO_ERROR = 'PROYECTO_ERROR';

// TAREAS

export const TAREAS_PROYECTO = 'TAREAS_PROYECTO';
export const AGREGAR_TAREA = 'AGREGAR_TAREA';
export const VALIDAR_TAREA = 'VALIDAR_TAREA';
export const ELIMINAR_TAREA = 'ELIMINAR_TAREA';
export const TAREA_ACTUAL = 'TAREA_ACTUAL';
export const ACTUALIZAR_TAREA = 'ACTUALIZAR_TAREA';
export const LIMPIAR_TAREA = 'LIMPIAR_TAREA';

// ALERTA

export const MOSTRAR_ALERTA = 'MOSTRAR_ALERTA';
export const OCULTAR_ALERTA = 'OCULTAR_ALERTA';

// AUTENTICACION

export const REGISTRO_EXITOSO = 'REGISTRO_EXITOSO';
export const REGISTRO_ERROR = 'REGISTRO_ERROR';
export const OBTENER_USUARIO = 'OBTENER_USUARIO';
export const LOGIN_EXITOSO = 'LOGIN_EXITOSO';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CERRAR_SESION = 'CERRAR_SESION';