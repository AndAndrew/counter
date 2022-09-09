import {InputItem} from "../InputItem/InputItem";
import s from './SettingsMenu.module.css';
import {useState} from "react";

export const SettingsMenu = () => {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [error, setError] = useState(false);

    const changeMinValue = (value: number) => {
        setMinValue(value);
    }
    const changeMaxValue = (value: number) => {
        setMaxValue(value);
    }

    return (
        <div className={s.settingsMenu}>
            <InputItem nickName="min value:" value={minValue} changeValue={changeMinValue}/>
            <InputItem nickName="max value:" value={maxValue} changeValue={changeMaxValue}/>
        </div>
    )
}