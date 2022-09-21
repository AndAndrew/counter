import {Monitor} from "./Monitor";
import {CounterButtonBlock} from "./CounterButtonBlock";
import s from './Counter.module.css';
import {useState} from "react";

type PropsType = {
    valueError: boolean,
    startValue: number,
    count: number,
    changeCount: (newValue: number) => void,
    maxValue: number,
    isSet: boolean
}

export const Counter = (props: PropsType) => {

    const [countError, setCountError] = useState<boolean>(false);

    const plusOne = () => {
        const newValue: number = props.count + 1;
        if (newValue <= props.maxValue) {
            props.changeCount(newValue);
        }
        if (newValue === props.maxValue) {
            setCountError(true);
        }
    }

    const reset = () => {
        props.changeCount(props.startValue);
        setCountError(false);
    }

    return (
        <div className={s.counter}>
            <Monitor counter={props.count}
                     error={countError}
                     valueError={props.valueError}
                     isSet={props.isSet}/>
            <CounterButtonBlock inc={plusOne}
                                reset={reset}
                                error={countError}
                                valueError={props.valueError}
                                isSet={props.isSet}/>
        </div>
    )
}