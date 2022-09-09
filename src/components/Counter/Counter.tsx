import {Monitor} from "./Monitor";
import {CounterButtonBlock} from "./CounterButtonBlock";
import s from './Counter.module.css';
import {useState} from "react";

type PropsType = {
    valueError: boolean,
}

export const Counter = (props: PropsType) => {

    const [count, setCount] = useState(0);
    const [error, setError] = useState<boolean>(false);

    const maxCount = 5;

    const plusOne = () => {
        const newValue = count + 1;
        if (newValue <= maxCount) {
            setCount(newValue);
        }
        if (newValue === maxCount) {
            setError(true);
        }
    }

    const reset = () => {
        setCount(0);
        setError(false);
    }

    return (
        <div className={s.counter}>
            <Monitor counter={count}
                     error={error}
                     valueError={props.valueError}/>
            <CounterButtonBlock inc={plusOne}
                                reset={reset}
                                error={error}
                                valueError={props.valueError}/>
        </div>
    )
}