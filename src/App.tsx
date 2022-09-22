import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue')) || 0);
    const [count, setCount] = useState<number>(Number(localStorage.getItem('count')) || 0);
    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')) || 5);
    const [valueError, setValueError] = useState(false);
    const [isSet, setIsSet] = useState(true);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('count', JSON.stringify(count));
    }, [startValue, maxValue, count]);

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
                      changeIsSetStatus={changeIsSetStatus}
            />
            <Counter startValue={startValue}
                     count={count}
                     maxValue={maxValue}
                     changeCount={changeCount}
                     valueError={valueError}
                     isSet={isSet}
            />
        </div>
    );
}

export default App;
