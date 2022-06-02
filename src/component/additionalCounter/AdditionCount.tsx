import React, {ChangeEvent} from 'react';
import { Counter } from './counter/Counter';
import {SettingCounter} from "./settingCounter/SettingCounter";

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

    return wasPress ? <Counter wasPress={wasPress}
                               setWasPress={setWasPress}
                               changeStateCount={changeStateCount}
                               resetValue={resetValue}
                               maxValue={maxValue}
                               stateValue={stateValue}/>
        : <SettingCounter maxValue={maxValue}
                          startValue={startValue}
                          onChangeMaxValue={onChangeMaxValue}
                          onChangeStartValue={onChangeStartValue}
                          clickedFn={clickedFn}
                          errorValue={errorValue}
                          wasPress={wasPress}/>
        ;
};

