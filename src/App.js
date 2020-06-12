import React, { useState } from 'react';
import Switch from './Switch'

const initialState ={
    stilvoll: false,
    kuhl: false,
    schon: false
};

const App = () =>{


    const [switches, setSwitches] = useState(initialState)

    const toggleSwitch = (id) =>{
        const currentState = switches[id];
        if(currentState === undefined) return;
        const activeSwitches = Object.values(switches).filter(value => value ? true : false).length;
        // Se os switches se adequam a condição, eles são ligados, se não, todos os que estão
        // ligados retornam ao estado inicial, e o selecionado ficará ligado
        const maxActive = Object.values(switches).length -1;
        const newState = activeSwitches === maxActive ? initialState : switches;
        setSwitches({...newState, [id]: !currentState})
    }

    // switches está acessando o id, ao clicá-lo (onClick), o evento irá fazê-lo ligar/desligar
    // de acordo com sua condição inicial e se ele se enquadra na regra imposta do número máximo
    // de switches ligados -- lembrando que active verifica o estado de switches, esse está atrelado
    // ao objeto initialState, que inicialmente, garante que todos estejam false, mas ao clicá-los
    // sabemos que será disparado a partir do filter feito em activeSwitches
    return(
        <div className='container'>
            <h1>Stilvoll-Kühl-Schön</h1>
            <Switch onClick={toggleSwitch} id='stilvoll' active={switches['stilvoll']} label='Stilvoll'/>
            <Switch onClick={toggleSwitch} id='kuhl' active={switches['kuhl']} label='Kühl'/>
            <Switch onClick={toggleSwitch} id='schon' active={switches['schon']} label='Schön'/>
        </div>
    )
}

export default App;;