/**
 * Created by Miguel on 29/11/2016.
 */
import Dispatcher from './Dispatcher.js';

export function switchPaint(data) {
    Dispatcher.dispatch({
       type:"BODY_SWITCH_PINTAR",
       data:data
    });
}

export function cambiar(color) {
    Dispatcher.dispatch({
        type:"BODY_CHANGE_COLOR",
        data:color
    });
}

export function setMatriz(data) {
    Dispatcher.dispatch({
        type:"BODY_PINTAR",
        data:data
    });
}

export function setMatrizResult(data) {
    Dispatcher.dispatch({
        type:"RESULT_MATRIZ",
        data:data
    });
}