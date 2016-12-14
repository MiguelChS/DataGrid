import React from 'react';
import * as Action from '../Actions.js';

export default class SubColumnGrafic extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            style:{
                backgroundColor:"white"
            }
        };
    }

    hoverColum(){
            Action.setMatriz({
                x:this.props.row,
                y:this.props.columnNumber,
                value:this.props.color.idColor
            });
    }

    click(){
        Action.switchPaint(this.props.row);
        Action.setMatriz({
            x:this.props.row,
            y:this.props.columnNumber,
            value:this.props.color.idColor
        });
    }

    render(){
        const style = Object.assign({},this.state.style);
        return(
            <div role="button" style={style} onClick={this.click.bind(this)} onMouseEnter={this.hoverColum.bind(this)}>
            </div>
        )
    }
}