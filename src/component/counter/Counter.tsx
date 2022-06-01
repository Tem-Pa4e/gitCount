import React from 'react';
import {ButtonFr} from "../button/Button";


interface CounterProps {
    stateValue: number
    maxValue: number
    wasPress: boolean
    setWasPress: () => void
    changeStateCount: () => void
    resetValue: () => void
}

export const Counter = ({
                            stateValue,
                            maxValue,
                            wasPress,
                            setWasPress,
                            changeStateCount,
                            resetValue
                        }: CounterProps) => {

    const countClassName = stateValue === maxValue ? 'errorCountForm' : 'countForm'
    const incDisabled = stateValue === maxValue || !wasPress
    const resetDisabled = !wasPress

    return (
        <>
            <div className={countClassName}>
                {stateValue}
            </div>
            <div className={'changedForm'}>
                <ButtonFr disabled={incDisabled} onClick={changeStateCount} title={'inc'}/>
                <ButtonFr disabled={resetDisabled} onClick={resetValue} title={'reset'}/>
                <ButtonFr disabled={resetDisabled} onClick={setWasPress} title={'set'}/>
            </div>
        </>
    );
};
