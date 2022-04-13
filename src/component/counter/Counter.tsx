import React from 'react';
import {Button} from "../button/Button";

interface CounterProps {
    stateValue: number
    maxValue: number
    wasPress: boolean
    errorValue: boolean
    changeStateCount: () => void
    resetValue: () => void
}

export const Counter = ({
                            stateValue,
                            maxValue,
                            wasPress,
                            errorValue,
                            changeStateCount,
                            resetValue
                        }: CounterProps) => {

    const countValue = !wasPress ? 'Enter value and press set' && errorValue ?
        <div style={{color: 'red'}}>Incorrect value</div> : 'Enter value and press set' : stateValue
    const countClassName = stateValue === maxValue ? 'errorCountForm' : 'countForm'
    const incDisabled = stateValue === maxValue || !wasPress
    const resetDisabled = !wasPress

    return (
        <>
            <div className={countClassName}>
                {countValue}
            </div>
            <div className={'changedForm'}>
                <Button disabled={incDisabled} onClick={changeStateCount} title={'inc'}/>
                <Button disabled={resetDisabled} onClick={resetValue} title={'reset'}/>
            </div>
        </>
    );
};
