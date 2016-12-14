import React from 'react';
import PanelControl from './panelControl/panelControl.jsx';
import PanelGrafic from './panelGrafic/panelGrafic.jsx';
import PanelResult from './panelResult/PanelResult.jsx';
import { resize } from './Actions.js';

export default class dateGrid extends React.Component{

    render(){
        return(
            <div className="DateGrafic">
                <PanelControl TipoColores={this.props.TipoColores}/>
                <PanelGrafic/>
                <PanelResult/>
            </div>
        )
    }
}