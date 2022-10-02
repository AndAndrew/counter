const CHANGE_START_VALUE = "CHANGE_START_VALUE" as const;
const CHANGE_COUNT = "CHANGE_COUNT" as const;
const CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE" as const;
const CHANGE_VALUE_ERROR_STATUS = "CHANGE_VALUE_ERROR_STATUS" as const;
const CHANGE_IS_SET_STATUS = "CHANGE_IS_SET_STATUS" as const;

export type StateType = {
    startValue: number,
    count: number,
    maxValue: number,
    valueError: boolean,
    isSet: boolean
};
type ActionType = changeStartValueACType | changeCountACType
    | changeMaxValueACType | setValueErrorACType
    | setIsSetStatusACType;
const initialState: StateType = {
    startValue: 1,
    count: 0,
    maxValue: 5,
    valueError: false,
    isSet: true
};

export const counterReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_START_VALUE:
            return {
                ...state,
                startValue: action.payload.value
            };
        case CHANGE_COUNT:
            return {
                ...state,
                count: action.payload.value
            };
        case CHANGE_MAX_VALUE:
            return {
                ...state,
                maxValue: action.payload.value
            };
        case CHANGE_VALUE_ERROR_STATUS:
            return {
                ...state,
                valueError: action.payload.status
            };
        case CHANGE_IS_SET_STATUS:
            return {
                ...state,
                isSet: action.payload.status
            };
        default:
            return state;
    }
};

type changeStartValueACType = ReturnType<typeof changeStartValueAC>;
export const changeStartValueAC = (value: number) => {
    return {
        type: CHANGE_START_VALUE,
        payload: {value},
    };
};
type changeCountACType = ReturnType<typeof changeCountAC>;
export const changeCountAC = (value: number) => {
    return {
        type: CHANGE_COUNT,
        payload: {value},
    };
};
type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>;
export const changeMaxValueAC = (value: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        payload: {value},
    };
};
type setValueErrorACType = ReturnType<typeof setValueErrorAC>;
export const setValueErrorAC = (status: boolean) => {
    return {
        type: CHANGE_VALUE_ERROR_STATUS,
        payload: {status},
    };
};
type setIsSetStatusACType = ReturnType<typeof setIsSetStatusAC>;
export const setIsSetStatusAC = (status: boolean) => {
    return {
        type: CHANGE_IS_SET_STATUS,
        payload: {status},
    };
};



