import {Button} from "../Button/Button";
import styles from './CounterButtonBlock.module.css'

type propsType = {
    inc: () => void,
    reset: () => void,
    valueError: boolean,
    error: boolean,
    isSet: boolean
}

export const CounterButtonBlock = (props: propsType) => {

    const plusOne = () => {
        props.inc();
    }

    const reset = () => {
        props.reset();
    }

    return (
        <div className={styles.buttonBlock}>
            <Button callBack={plusOne} nickName={'Inc'} disabled={props.error || props.valueError || !props.isSet}/>
            <Button callBack={reset} nickName={'Reset'} disabled={props.valueError || !props.isSet}/>
        </div>
    )
}