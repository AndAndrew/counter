import s from './Settings.module.css';
import {SettingsMenu} from "./SettingsMenu";
import {SettingsButtonBlock} from "./SettingsButtonBlock";
import {useState} from "react";

type PropsType = {
    setValueError: (error: boolean) => void,
}

export const Settings = (props: PropsType) => {

    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [startValueError, setStartValueError] = useState(false);
    const [maxValueError, setMaxValueError] = useState(false);

    const changeStartValue = (value: number) => {
        setStartValueError(false);
        props.setValueError(false);
        setStartValue(value);
        if (value < 0 || value >= maxValue) {
            setStartValueError(true);
            props.setValueError(true);
        }
    }

    const changeMaxValue = (value: number) => {
        setMaxValueError(false);
        props.setValueError(false);
        setMaxValue(value);
        if (value < 0 || value <= startValue) {
            setMaxValueError(true);
            props.setValueError(true);
        }
    }

    return (
        <div className={s.settings}>
            <SettingsMenu startValueError={startValueError} maxValueError={maxValueError} startValue={startValue} maxValue={maxValue} changeStartValue={changeStartValue} changeMaxValue={changeMaxValue}/>
            <SettingsButtonBlock error={startValueError || maxValueError}/>
        </div>
    )
}