/**
 * Created by Miguel on 12/12/2016.
 */
import React from 'react';

import Store from '../store/storeResult.js';

export default class PanelResult extends React.Component{
    constructor(){
        super();
        this.state = Store.getState();
    }

    render(){
        return(
            <div className="DateGrafic-Result">
                <div>
                    <p>Lunes a viernes 17:30 hs a 21:00 hs</p><span>&times;</span>
                </div>
            </div>
        );
    }
}
