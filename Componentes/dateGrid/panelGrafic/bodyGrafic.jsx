/**
 * Created by Miguel on 1/12/2016.
 */
import React from 'react';
import Store from '../store/storeBodyGrafic.js';
import Row from '../panelGrafic/rowBodyGrafic.jsx';
import * as Action from '../Actions.js';

export default class BodyGrafic extends React.Component{
    constructor(props){
        super(props);
        this.state = Object.assign(Store.getState());
        this.pintar = {
            pintar:false,
            fila:null
        }
    }
    componentWillMount(){
        Store.on("update",()=>{
            this.setState(Store.getState());
        });

        Store.on("updatePintar",(data)=>{
            this.pintar.pintar = !this.pintar.pintar;
            if(this.pintar.pintar){
                this.pintar.fila = data;
            }else{
                this.pintar.fila = null;
            }
        });

        Store.on("pintarColumna",(data)=>{
            if(!this.pintar.pintar || this.pintar.fila == null) return;
            var fila =  this.pintar.fila;
            for(var item in this.refs[fila].refs){
                var colum = this.refs[fila].refs[item];
                if(colum.refs[data.y] != undefined){
                    var style = {
                        backgroundColor:this.state.color.color
                    };
                    colum.refs[data.y].setState({style},function () {
                        Action.setMatrizResult({
                            x:fila,
                            y:data.y,
                            value:data.value
                        });
                    });
                    break;
                }
            }
        });

    }

    render(){
        var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
        var semana=[];
        for(let i =0; i < 7 ; i++){
            if(i == 0 || i == 5){
                semana.push(
                    <Row key={i} ref={i} dia={dias[i]} row={i} first={true} color={this.state.color} pintar={this.pintar.pintar}/>
                );
                continue;
            }
            semana.push(
                <Row key={i} ref={i} dia={dias[i]} row={i} first={false} color={this.state.color} pintar={this.pintar.pintar}/>
            );

        }
        return(
            <div>
                {semana}
            </div>
        );
    }
}