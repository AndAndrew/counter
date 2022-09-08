import {Monitor} from "./Monitor";
import {ButtonBlock} from "./ButtonBlock";
import s from './Counter.module.css';
import {useState} from "react";

export const Counter = () => {

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
            <Monitor counter={count} error={error}/>
            <ButtonBlock inc={plusOne} reset={reset} error={error}/>
        </div>
    )
}