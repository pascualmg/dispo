import React, {Component} from 'react';
import './App.css';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ajax as OAjax} from 'rxjs/observable/dom/ajax';

import {Dispo, IN_STOCK, IN_STOCK_WAIT, NO_STOCK} from './components/dispo'

const randomizeDispo = () => Math.floor(Math.random() * 3) + 1;
const assertValidCode = (code) => (1 <= code <= 3) ? code : 3;
const getCodeJson = (code) => ([IN_STOCK, IN_STOCK_WAIT, NO_STOCK][assertValidCode(code) - 1]);
const dispo = getCodeJson(randomizeDispo());

const getDispoAjaxObservable = () => {
    const peti$ = OAjax({
        url: "http://localhost:8888/dispo",
        method: "GET"
    });
    return peti$;
};
const peti$ = getDispoAjaxObservable();
peti$
    .pipe(
        map((item) => item.name)
    ).subscribe(
        console.log,
        console.log,
        console.log,
    );

class App extends Component {
    render() {
        return (
            <div className="App">
                <Dispo dispo={dispo}>
                </Dispo>
            </div>
        );
    }
}

export default App;
