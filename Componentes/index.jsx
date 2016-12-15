import React from 'react';
import DateGrid from './dateGrid/dateGrid.jsx';

class index extends React.Component{

    render(){
        const Horas = [{
            label:"Horas",
            value:1,
            color:"red",
        },{
            label:"Otras Horas",
            value:2,
            color:"blue"
        }];
        return(
            <DateGrid Horarios={Horas}/>
        )
    }
};

module.exports = index;