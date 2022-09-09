import s from './Monitor.module.css'

type propsType = {
    counter: number,
    error: boolean,
    valueError: boolean
}

export const Monitor = (props: propsType) => {

    return (
        <>
            {
                props.valueError
                    ? <div className={s.valueError}>incorrect value</div>
                    : <div className={props.error ? s.error : s.monitor}>{props.counter}</div>
            }
        </>
    )
}