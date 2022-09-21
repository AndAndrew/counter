import {Button} from "../Button/Button";

type PropsType = {
    isDisable: boolean,
    setValues: () => void,
}

export const SettingsButtonBlock = (props: PropsType) => {

    return (
        <div>
            <Button callBack={props.setValues} nickName={"Set"} disabled={props.isDisable}/>
        </div>
    )
}