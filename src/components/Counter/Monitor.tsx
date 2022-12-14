import s from './Monitor.module.css'

type propsType = {
    counter: number,
    error: boolean,
    valueError: boolean,
    isSet: boolean
}

export const Monitor = (props: propsType) => {

    return (
        <>
            {
                props.valueError
                    ? <div className={`${s.monitor} ${s.valueError}`}>incorrect value</div>
                    : props.isSet
                        ? <div className={props.error ? `${s.monitor} ${s.error}` : s.monitor}>{props.counter}</div>
                        : <div className={`${s.monitor} ${s.isNotSet}`}>enter values and press 'set'</div>
            }
        </>
    )
}