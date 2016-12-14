import React from 'react';

export default class headGrafic extends React.Component{

    render(){
        const Horas = [];
        for (let i = 0;i<24;i++){
                Horas.push(
                    <div key={i} className="dateGrafic-Time DateGrafic-text DateGrafic-textCenter">
                            {(()=>{return i >= 10 ? i : `0${i}`})()}
                    </div>)
        }
        return(
            <div className="dateGrafic-row">
                <div className="dateGrafic-Date dateGrafic-SinBorderleft DateGrafic-text">Hora</div>
                {Horas}
            </div>
        )
    }
}