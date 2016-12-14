import React from 'react';
import * as Action from '../Actions.js';

export default  class InputRadioControl extends React.Component{
    constructor(props){
        super(props);
        this.state = Object.assign({},props.state);
    }
    changeRadio(){
        Action.cambiar({
            color : this.state.color,
            idColor : this.state.value
        });
    }
    render(){
        return(
            <label className="radio-inline DateGrafic-text">
                <input type="radio" name="RadioButton" id="inlineRadio1" value={this.state.value} onChange={this.changeRadio.bind(this)}/>{this.state.label}
            </label>
        )
    }
}