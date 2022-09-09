import {Button} from "../Button/Button";

type PropsType = {
    error: boolean,
}

export const SettingsButtonBlock = (props: PropsType) => {

    return (
        <div>
            <Button callBack={() => {
            }} nickName={"Set"} disabled={props.error}/>
        </div>
    )
}