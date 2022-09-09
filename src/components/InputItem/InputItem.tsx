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
        const value = event.currentTarget.value as any as number;
        props.changeValue(value);
    }

    return (
        <div>
            <div className={s.item}>{props.nickName}</div>
            <input className={props.error ? s.item + ' ' + s.error : s.item}
                   value={props.value}
                   type="number"
                   onChange={onChangeHandler}/>
        </div>
    )
}