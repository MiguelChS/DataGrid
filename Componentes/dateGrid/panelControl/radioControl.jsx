import React from 'react';
import InputRadioControl from './inputRadioControl.jsx';

export default  class RadioControl extends React.Component{

    buildRadios(){
        var radiosButton=[];
        if(this.props.hasOwnProperty("TipoColores") && !Array.isArray(this.props.TipoColores)) return radiosButton;

        for(let i=0;i<this.props.TipoColores.length;i++){
            radiosButton.push(
                <InputRadioControl key={i} state={this.props.TipoColores[i]} changeColor={this.props.changeColor}/>
            )
        }
        return radiosButton;
    }

    constructor(props){
        super(props);
        this.state={
            radioButtons:this.buildRadios()
        }
    }

    render(){
        return(
            <div className="DateGrafic-Radio">
                {this.state.radioButtons}
            </div>
        )
    }
}