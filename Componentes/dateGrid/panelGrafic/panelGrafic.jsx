import React from 'react';
import HeadGrafic from './headGrafic.jsx';
import BodyGrafic from './bodyGrafic.jsx';

export default class panelGrafic extends React.Component{
    render(){
        return(
            <div className="">
                <HeadGrafic/>
                <BodyGrafic/>
            </div>
        )
    }
}