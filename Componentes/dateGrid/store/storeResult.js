/**
 * Created by Miguel on 13/12/2016.
 */
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher.js';

class StoreResult extends EventEmitter{

    generarMatriz(){
        var matrizAux = [];
        for(let i =0 ; i < 7; i++){
            matrizAux.push([]);
            for(let j = 0 ; j < 48; j++){
                matrizAux[i].push(0);
            }
        }
        return matrizAux;
    }

    constructor(){
        super();
        this.state = {
            semanaMatriz : this.generarMatriz()
        }
    }

    getState(){
        return this.state;
    }

    setMatrizSeleccion(data){
        this.state.semanaMatriz[data["x"]][data["y"]] = data["value"];
        console.log(this.state.semanaMatriz);
    }

    handleAction(action){
        switch (action.type){
            case "RESULT_MATRIZ":
                this.setMatrizSeleccion(action.data);
                break;
        }
    }
}

const storeResult = new StoreResult;

dispatcher.register(storeResult.handleAction.bind(storeResult));

export default storeResult;