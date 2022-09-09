import {InputItem} from "../InputItem/InputItem";
import s from './SettingsMenu.module.css';

type PropsType = {
    startValue: number,
    maxValue: number,
    changeStartValue: (value: number) => void,
    changeMaxValue: (value: number) => void,
    startValueError: boolean,
    maxValueError: boolean
}

export const SettingsMenu = (props: PropsType) => {

    return (
        <div className={s.settingsMenu}>
            <InputItem error={props.startValueError}
                       nickName="start value:"
                       value={props.startValue}
                       changeValue={props.changeStartValue}/>
            <InputItem error={props.maxValueError}
                       nickName="max value:"
                       value={props.maxValue}
                       changeValue={props.changeMaxValue}/>
        </div>
    )
}