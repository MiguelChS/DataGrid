import React from 'react';
import * as Action from '../Actions.js';

export default  class MenuControl extends React.Component{

    borrarClick(){
        Action.cambiar("white");
    }

    render(){
        return(
            <div className="DateGrafic-Menu DateGrafic-text" >
                <i className="fa fa-paint-brush" role="button" />
                <i className="fa fa-eraser" role="button" onClick={this.borrarClick.bind(this)} />
                <i className="fa fa-calendar-check-o" role="button" />
            </div>
        )
    }
}