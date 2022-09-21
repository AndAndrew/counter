import {InputItem} from "../InputItem/InputItem";
import s from './SettingsMenu.module.css';
import {useState} from "react";

type PropsType = {
    startValue: number,
    maxValue: number,
    changeStartValue: (value: number) => void,
    changeMaxValue: (value: number) => void,
    changeValueError: (error: boolean) => void,
}

export const SettingsMenu = (props: PropsType) => {

    const [startValueError, setStartValueError] = useState(false);
    const [maxValueError, setMaxValueError] = useState(false);

    const changeStartValue = (value: number) => {
        setStartValueError(false);
        setMaxValueError(false);
        props.changeValueError(false);
        props.changeStartValue(value);
        if (value < 0 || value >= props.maxValue) {
            setStartValueError(true);
            props.changeValueError(true);
        } else {
            props.changeStartValue(value);
        }
    }

    const changeMaxValue = (value: number) => {
        setStartValueError(false);
        setMaxValueError(false);
        props.changeValueError(false);
        props.changeMaxValue(value);
        if (value < 0 || value <= props.startValue) {
            setMaxValueError(true);
            props.changeValueError(true);
        } else {
            props.changeMaxValue(value);
        }
    }

    return (
        <div className={s.settingsMenu}>
            <InputItem error={startValueError}
                       nickName="start value:"
                       value={props.startValue}
                       changeValue={changeStartValue}/>
            <InputItem error={maxValueError}
                       nickName="max value:"
                       value={props.maxValue}
                       changeValue={changeMaxValue}/>
        </div>
    )
}