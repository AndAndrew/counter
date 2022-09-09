import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [error, setError] = useState(false)

    const setValueError = (error: boolean) => {
        setError(error);
    }

    return (
        <div className="App">
            <Settings setValueError={setValueError}/>
            <Counter valueError={error}/>
        </div>
    );
}

export default App;
