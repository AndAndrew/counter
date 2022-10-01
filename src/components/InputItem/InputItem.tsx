import s from './InputItem.module.css';
import {ChangeEvent} from "react";

type InputItemPropsType = {
    nickName: string,
    value: number,
    changeValue: (value: number) => void,
    error: boolean
}

export const InputItem = (props: InputItemPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value);
        props.changeValue(value);
    }

    return (
        <div className={s.inputItem}>
            <div>{props.nickName}</div>
            <input className={props.error ? s.error : s.valueSetter}
                   value={props.value}
                   type="number"
                   onChange={onChangeHandler}/>
        </div>
    )
}