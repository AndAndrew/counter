import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [startValue, setStartValue] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [valueError, setValueError] = useState(false);
    const [isSet, setIsSet] = useState(true);

    const changeValueError = (error: boolean) => {
        setValueError(error);
    }
    const changeStartValue = (value: number) => {
        setStartValue(value);
    }
    const changeCount = (value: number) => {
        setCount(value);
    }
    const changeMaxValue = (value: number) => {
        setMaxValue(value);
    }
    const changeIsSetStatus = (status: boolean) => {
        setIsSet(status)
    }

    return (
        <div className="App">
            <Settings startValue={startValue}
                      maxValue={maxValue}
                      changeStartValue={changeStartValue}
                      changeCountValue={changeCount}
                      changeMaxValue={changeMaxValue}
                      valueError={valueError}
                      changeValueError={changeValueError}
                      isSet={isSet}
                      changeIsSetStatus={changeIsSetStatus}/>
            <Counter startValue={startValue}
                     count={count}
                     maxValue={maxValue}
                     changeCount={changeCount}
                     valueError={valueError}
                     isSet={isSet}/>
        </div>
    );
}

export default App;
