

const initialState = {
    startValue: 0 as number,
    maxValue: 5 as number,
    stateValue:  0 as number,
    wasPress: false as boolean
}


export const appReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "START-VALUE": {
            return {...state, startValue: action.newNumber}
        }
        case "MAX-VALUE": {
            return {...state,maxValue: action.newNumber}
        }
        case "STATE-VALUE": {
            return {...state,stateValue: action.newNumber}
        }
        case "WAS-PRESS": {
            return {...state,wasPress: action.wasPress}
        }
        default:
            return state
    }
}

export type ActionType =
    ReturnType<typeof StartValueAC>
    | WasPressType
    | ReturnType<typeof MaxValueAC>
    | ReturnType<typeof StateValueAC>

export type WasPressType = ReturnType<typeof WasPressAC>

export const WasPressAC = (wasPress: boolean) => ({type: "WAS-PRESS", wasPress} as const)
export const StartValueAC = (newNumber: number) => ({type: "START-VALUE", newNumber} as const)
export const MaxValueAC = (newNumber: number) => ({type: "MAX-VALUE", newNumber} as const)
export const StateValueAC = (newNumber: number) => ({type: "STATE-VALUE", newNumber} as const)
