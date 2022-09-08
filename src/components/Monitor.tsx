import s from './Monitor.module.css'

type propsType = {
    counter: number;
    error?: boolean;
}

export const Monitor = (props: propsType) => {

    return (
        <div className={props.error ? s.error : s.monitor}>
            {props.counter}
        </div>
    )
}