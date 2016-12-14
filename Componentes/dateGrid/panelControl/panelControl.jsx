import React from 'react';
import RadioControl from './radioControl.jsx';
import MenuControl from './menuControl.jsx';

export default class PanelControl extends React.Component{
    render(){
        return(
            <div className="DateGrafic-Control" >
                <RadioControl TipoColores={this.props.TipoColores}/>
                <MenuControl/>
            </div>
        );
    }
}