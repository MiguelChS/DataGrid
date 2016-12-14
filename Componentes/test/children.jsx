import React from 'react';

export default class Children extends React.Component {
    constructor(){
        super()
        this.state = {
            style:{
                backgroundColor:"red"
            }
        }
    }
    render() {
        const style = Object.assign({},this.state.style);
        return (
            <button style={style} className="btn">
                color ?
            </button>
        )
    }
}