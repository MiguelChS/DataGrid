import React from 'react';

import ColumnBodyGrafic from './columBodyGrafic.jsx';

export default class RowBodyGrafic extends React.Component{

    expandir(){
        console.log(this.props);
        console.log(this.props.key);
    }

    render(){
        const horas = [];
        for(let i = 0; i < 24; i++){
            horas.push(
                <ColumnBodyGrafic ref={i} NumberColumn={i+i} row={this.props.row}  key={i} color={this.props.color} pintar={this.props.pintar}/>
            )
        }
        var span = this.props["first"] ? <span className="glyphicon glyphicon-plus" aria-hidden="true" onClick={this.expandir.bind(this)}/> : null;
        return(
            <div className="dateGrafic-row">
                {span}
                <div className="dateGrafic-Date DateGrafic-text">{this.props["dia"]}</div>
                {horas}
            </div>
        );
    }
}