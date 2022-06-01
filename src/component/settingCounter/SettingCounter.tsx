import React, {ChangeEvent} from 'react';
import { ButtonFr } from '../button/Button';
import {ChangeSettingCounterForm} from "./changeSettingCounterForm/ChangeSettingCounterForm";

interface SettingCounterProps {
    maxValue: number
    startValue: number
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    clickedFn: () => void
    errorValue: boolean
    wasPress: boolean
}

export const SettingCounter = ({
                                   wasPress,
                                   maxValue,
                                   startValue,
                                   onChangeMaxValue,
                                   onChangeStartValue,
                                   clickedFn,
                                   errorValue
                               }: SettingCounterProps) => {

    const setDisabled = maxValue === startValue || startValue < 0 || startValue > maxValue || wasPress
    const maxValueClassName = maxValue === startValue ? 'errorInput' : ''
    const startValueClassName = !errorValue ? '' : 'errorInput'
    return (
        <>
            <div className={'countForm'}>
                <ChangeSettingCounterForm title={'max value'} className={maxValueClassName}
                                          value={maxValue}
                                          onChange={onChangeMaxValue}/>
                <ChangeSettingCounterForm title={'start value'} className={startValueClassName}
                                          value={startValue} onChange={onChangeStartValue}/>
            </div>
            <div className={'changedForm'}>
                <ButtonFr disabled={setDisabled} onClick={clickedFn} title={'set'}/>
            </div>
        </>
    );
};


