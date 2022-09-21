import s from './Settings.module.css';
import {SettingsMenu} from "./SettingsMenu";
import {SettingsButtonBlock} from "./SettingsButtonBlock";
import {useState} from "react";

type PropsType = {
    startValue: number,
    changeCountValue: (value: number) => void,
    maxValue: number,
    changeStartValue: (value: number) => void,
    changeMaxValue: (value: number) => void,
    valueError: boolean,
    changeValueError: (error: boolean) => void,
    isSet: boolean,
    changeIsSetStatus: (status: boolean) => void
}

export const Settings = (props: PropsType) => {

    const [startValue, setStartValue] = useState<number>(props.startValue);
    const [maxValue, setMaxValue] = useState<number>(props.maxValue);


    const changeStartValue = (value: number) => {
        props.changeIsSetStatus(false);
        setStartValue(value);
    }
    const changeMaxValue = (value: number) => {
        props.changeIsSetStatus(false);
        setMaxValue(value);
    }
    const setValues = () => {
        props.changeStartValue(startValue);
        props.changeCountValue(startValue);
        props.changeMaxValue(maxValue);
        props.changeIsSetStatus(true);
    }

    return (
        <div className={s.settings}>
            <SettingsMenu startValue={startValue}
                          maxValue={maxValue}
                          changeStartValue={changeStartValue}
                          changeMaxValue={changeMaxValue}
                          changeValueError={props.changeValueError}
            />
            <SettingsButtonBlock isDisable={props.valueError || props.isSet} setValues={setValues}/>
        </div>
    )
}