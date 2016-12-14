import React from 'react';
import Children from './children.jsx';


export default class Parent extends React.Component{
    constructor(){
        super();
        this.state = {
            color:"white"
        }
    }

    cambiar(){
        this.setState({color:"red"});
        var style = {
            backgroundColor:"white"
        };
        this.refs.btn1.setState({style});
        this.refs.btn2.setState({style});
    }

    render(){
        return(
            <div>
                <Children ref="btn1" color={this.state.color}/>
                <Children ref="btn2" color={this.state.color}/>
                <button onClick={this.cambiar.bind(this)} >
                    cambiar el color
                </button>
            </div>
        )
    }
}