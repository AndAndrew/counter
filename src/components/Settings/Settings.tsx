import s from './Settings.module.css';
import {SettingsMenu} from "./SettingsMenu";
import {SettingsButtonBlock} from "./SettingsButtonBlock";

export const Settings = () => {

    return (
        <div className={s.settings}>
            <SettingsMenu/>
            <SettingsButtonBlock/>
        </div>
    )
}