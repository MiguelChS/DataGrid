/**
 * Created by Miguel on 12/12/2016.
 */
import React from 'react';
import Store from '../store/storeResult.js';
import Result from './Result.jsx';

export default class PanelResult extends React.Component{
    constructor(){
        super();
        this.state = Store.getState();
    }
    componentWillMount(){
        Store.on("update",()=>{
            this.setState(Store.getState(),function () {
                this.generarHorarios();
            });
        });
    }


    generarHorarios(){
        var AuxHorario = [];
        for( let x in this.state.semanaMatriz){
            var ultimovalor = 0;
            for( let y in this.state.semanaMatriz[x] ){
                let valor = this.state.semanaMatriz[x][y];
                //si el valor es 0 significa que no se pinto nada
                if(valor != 0){
                    if(ultimovalor == 0){
                        //significa que ya se tiene que agregar un horario nuevo
                        AuxHorario.push({
                            row:x,
                            ini:y,
                            fin:y,
                            value: valor
                        });
                    }else{
                        // si el valor que se siguen siendo el mismo valor es que sigue con el mismo valor y modificamos el ultimo AuxHorario que se agrego
                        if(ultimovalor == valor){
                            let ultimoAgregado = AuxHorario.length-1;
                            AuxHorario[ultimoAgregado].fin = y;
                        }else{
                            //en caso contrario significa que se ahora se pinto con otro horario
                            AuxHorario.push({
                                row:x,
                                ini:y,
                                fin:y,
                                value: valor
                            });
                        }
                    }
                    //volvemos a cargar el ultimo valor que fue evaluado
                    ultimovalor = valor;
                }
            }
        }
        //armar los horarios
        for(let i = 0;i< AuxHorario ;i ++){

        }
        console.log(AuxHorario);
    }

    render(){
        var result = [];
        for (let i = 0;i<this.props.Horarios.length ; i++){
            var horario = this.props.Horarios[i];
            var sinBorde =  false;
            if(i == this.props.Horarios.length - 1){
                sinBorde = true;
            }
            result.push(
                <Result ref={horario.value} key={i} sinBorde={sinBorde} label={horario.label} />
            )
        }
        return(
            <div>
                {result}
            </div>
        );
    }
}
