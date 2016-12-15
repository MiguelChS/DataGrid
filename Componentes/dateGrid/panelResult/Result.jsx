import React from 'react';

export default class Result extends React.Component{
    constructor(){
        super();
        this.state = {
            error:"",
            horario:[]
        }

    }
    render(){
        var styleClass = `DateGrafic-Result ${this.props.sinBorde ? "sinBorderBottom": ""}`;
        return(
            <div className={styleClass}>
                <div className="header">
                    <div className="pull-left text-bold">{this.props.label}</div>
                    <div className="pull-right">{this.state.error}</div>
                </div>
                <div className="body">
                    {this.state.horario}
                </div>
            </div>
        );
    }
}

/*<div>
 <p>Lunes a viernes 17:30 hs a 21:00 hs</p><span>&times;</span>
 </div>*/