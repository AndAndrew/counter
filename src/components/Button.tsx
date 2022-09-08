import s from './Button.module.css'

type propsType = {
    callBack: () => void;
    nickName: string;
    disabled: boolean;
}

export const Button = (props: propsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler} disabled={props.disabled} className={s.button}>
            {props.nickName}
        </button>
    )
}