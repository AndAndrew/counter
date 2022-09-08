import {Button} from "./Button";

type propsType = {
    inc: () => void;
    reset: () => void;
    error: boolean;
}

export const ButtonBlock = (props: propsType) => {

    const plusOne = () => {
        props.inc();
    }

    const reset = () => {
        props.reset();
    }

    return (
        <div>
            <Button callBack={plusOne} nickName={'Inc'} disabled={props.error}/>
            <Button callBack={reset} nickName={'Reset'} disabled={false}/>
        </div>
    )
}