import React from 'react';
import './style.css';

const IN_STOCK = {
    name:"in-stock",
    code: 1
};
const IN_STOCK_WAIT = {
    name:"in-stock-wait",
    code: 2
};
const NO_STOCK = {
    name:"out-stock",
    code: 3
};


const Dispo = ({dispo}) =>
    <div className={dispo.name}>
        {dispo.name}
    </div>
;

export {Dispo, IN_STOCK_WAIT, IN_STOCK, NO_STOCK};
