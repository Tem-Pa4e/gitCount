import React, {ChangeEvent} from 'react';
import {Button} from "../button/Button";
import {ChangeSettingCounterForm} from "../settingCounter/changeSettingCounterForm/ChangeSettingCounterForm";

interface AdditionalCounterProps {
    stateValue: number
    startValue: number
    maxValue: number
    wasPress: boolean
    errorValue: boolean
    changeStateCount: () => void
    resetValue: () => void
    clickedFn: () => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setWasPress:  () => void
}

export const AdditionalCounter = ({
                                      setWasPress,
                                      clickedFn,
                                      stateValue,
                                      onChangeMaxValue,
                                      onChangeStartValue,
                                      startValue,
                                      maxValue,
                                      wasPress,
                                      changeStateCount,
                                      resetValue, errorValue
                                  }: AdditionalCounterProps) => {

    const countClassName = stateValue === maxValue ? 'errorCountForm' : 'countForm'
    const incDisabled = stateValue === maxValue || !wasPress
    const resetDisabled = !wasPress
    const maxValueClassName = maxValue === startValue ? 'errorInput' : ''
    const startValueClassName = !errorValue ? '' : 'errorInput'
    const setDisabled = maxValue === startValue || startValue < 0 || startValue > maxValue || wasPress
    return wasPress ?
        <>
            <div className={countClassName}>
                {stateValue}
            </div>
            <div className={'changedForm'}>
                <Button disabled={incDisabled} onClick={changeStateCount} title={'inc'}/>
                <Button disabled={resetDisabled} onClick={resetValue} title={'reset'}/>
                <Button disabled={resetDisabled} onClick={setWasPress} title={'set'}/>
            </div>
        </>
        :
        <>
            <div className={'countForm'}>
                <ChangeSettingCounterForm title={'max value'} className={maxValueClassName}
                                          value={maxValue}
                                          onChange={onChangeMaxValue}/>
                <ChangeSettingCounterForm title={'start value'} className={startValueClassName}
                                          value={startValue} onChange={onChangeStartValue}/>
            </div>
            <div className={'changedForm'}>
                <Button disabled={setDisabled} onClick={clickedFn} title={'set'}/>
            </div>
        </>


        ;
};

