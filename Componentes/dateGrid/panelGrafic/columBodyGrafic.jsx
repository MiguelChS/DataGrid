import React from 'react';
import SubColumnGrafic from './subColumnaGrafic.jsx';

export default class ColumnBodyGrafic extends React.Component{

    render(){
        var subColumna = [];
        subColumna.push(
            <SubColumnGrafic ref={this.props["NumberColumn"]} key={1} row={this.props.row}  columnNumber = {this.props["NumberColumn"]} color={this.props.color}  pintar={this.props.pintar}/>
        );
        subColumna.push(
            <SubColumnGrafic ref={this.props["NumberColumn"] + 1} key={2} row={this.props.row} columnNumber = {this.props["NumberColumn"] + 1 } color={this.props.color}  pintar={this.props.pintar}/>
        );
        return(
            <div className="dateGrafic-Time">
                {subColumna}
            </div>
        );
    }
}