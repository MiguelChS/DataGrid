/**
 * Created by Miguel on 12/12/2016.
 */
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher.js';

class StoreBodyGrafic extends EventEmitter{

    constructor(){
        super();
        this.state = {
            color:{
                color:"",
                idColor:null
            },
            pintar:false,
            fila:null

        };
        this.setMaxListeners(0);
    }

    getState(){
        return this.state;
    }

    changeColor(data){
        this.state.color = data;
        this.emit("update");
    }

    switchPintar(data){
        this.emit("updatePintar",data);
    }

    pintar(data){
        this.emit("pintarColumna",data);
    }

    handleAction(action){
        switch (action.type){
            case "BODY_CHANGE_COLOR":
                this.changeColor(action.data);
                break;
            case "BODY_SWITCH_PINTAR":
                this.switchPintar(action.data);
                break;
            case "BODY_PINTAR":
                this.pintar(action.data);
                break;
        }
    }

}

const storeBodyGrafic = new StoreBodyGrafic;

dispatcher.register(storeBodyGrafic.handleAction.bind(storeBodyGrafic));

export default storeBodyGrafic;