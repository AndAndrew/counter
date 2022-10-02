import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {AppRootStateType} from "./Redux/Store";
import {
    changeCountAC,
    changeMaxValueAC,
    changeStartValueAC,
    setIsSetStatusAC,
    setValueErrorAC,
    StateType
} from "./Redux/counterReducer";
import {useDispatch, useSelector} from "react-redux";

function App() {

    // const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue')) || 0);
    // const [count, setCount] = useState<number>(Number(localStorage.getItem('count')) || 0);
    // const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')) || 5);
    // const [valueError, setValueError] = useState(false);
    // const [isSet, setIsSet] = useState(true);

    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue));
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue));
    //     localStorage.setItem('count', JSON.stringify(count));
    // }, [startValue, maxValue, count]);

    const counter = useSelector<AppRootStateType, StateType>(state => state.counter);
    const dispatch = useDispatch();

    const changeValueError = (status: boolean) => {
        dispatch(setValueErrorAC(status));
    }
    const changeStartValue = (value: number) => {
        dispatch(changeStartValueAC(value));
    }
    const changeCount = (value: number) => {
        dispatch(changeCountAC(value));
    }
    const changeMaxValue = (value: number) => {
        dispatch(changeMaxValueAC(value));
    }
    const changeIsSetStatus = (status: boolean) => {
        dispatch(setIsSetStatusAC(status));
    }

    return (
        <div className="App">
            <Settings startValue={counter.startValue}
                      maxValue={counter.maxValue}
                      changeStartValue={changeStartValue}
                      changeCountValue={changeCount}
                      changeMaxValue={changeMaxValue}
                      valueError={counter.valueError}
                      changeValueError={changeValueError}
                      isSet={counter.isSet}
                      changeIsSetStatus={changeIsSetStatus}
            />
            <Counter startValue={counter.startValue}
                     count={counter.count}
                     maxValue={counter.maxValue}
                     changeCount={changeCount}
                     valueError={counter.valueError}
                     isSet={counter.isSet}
            />
        </div>
    );
}

export default App;
