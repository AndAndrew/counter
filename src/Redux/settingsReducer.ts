const CHANGE_START_VALUE = "CHANGE_START_VALUE" as const;
const CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE" as const;

export type SettingsStateType = {
    startValue: number,
    maxValue: number
};
type ActionType = changeStartValueACType | changeMaxValueACType

const initialState: SettingsStateType = {
    startValue: 0,
    maxValue: 5
}

export const settingsReducer = (state: SettingsStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_START_VALUE:
            return {
                ...state,
                startValue: action.payload.value
            };
        case CHANGE_MAX_VALUE:
            return {
                ...state,
                maxValue: action.payload.value
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
type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>;
export const changeMaxValueAC = (value: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        payload: {value},
    };
};