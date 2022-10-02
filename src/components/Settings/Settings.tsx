import container from '../../Common/Styles/Container.module.css'
import {SettingsMenu} from "./SettingsMenu";
import {SettingsButtonBlock} from "./SettingsButtonBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Store";
import {changeMaxValueAC, changeStartValueAC, SettingsStateType} from "../../Redux/settingsReducer";

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

    const settings = useSelector<AppRootStateType, SettingsStateType>(state => state.settings);
    const dispatch = useDispatch();

    const changeStartValue = (value: number) => {
        props.changeIsSetStatus(false);
        dispatch(changeStartValueAC(value));
    }
    const changeMaxValue = (value: number) => {
        props.changeIsSetStatus(false);
        dispatch(changeMaxValueAC(value));
    }
    const setValues = () => {
        props.changeStartValue(settings.startValue);
        props.changeCountValue(settings.startValue);
        props.changeMaxValue(settings.maxValue);
        props.changeIsSetStatus(true);
    }

    return (
        <div className={container.container}>
            <SettingsMenu startValue={settings.startValue}
                          maxValue={settings.maxValue}
                          changeStartValue={changeStartValue}
                          changeMaxValue={changeMaxValue}
                          changeValueError={props.changeValueError}
            />
            <SettingsButtonBlock isDisable={props.valueError || props.isSet} setValues={setValues}/>
        </div>
    )
}