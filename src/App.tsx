import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import {AdditionalCounter} from "./component/additionalCounter/AdditionCount";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./component/state/store";
import {
    MaxValueAC,
    StartValueAC,
    StateValueAC,
    WasPressAC
} from "./component/state/app-reducer";
import { Counter } from './component/counter/Counter';
import {SettingCounter} from "./component/settingCounter/SettingCounter";

function App() {

    const startValue = useSelector<AppRootStateType, number>(state => state.app.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.app.maxValue)
    const stateValue = useSelector<AppRootStateType, number>(state => state.app.stateValue)
    const wasPress = useSelector<AppRootStateType, boolean>(state => state.app.wasPress)
    const dispatch = useDispatch()

    const onClickButtonSet = () => {
        dispatch(WasPressAC(false))
    }

    useEffect(() => {
        let maxValueStr = localStorage.getItem('maxValue')
        if (maxValueStr) {
            // setMaxValue(JSON.parse(maxValueStr))
            dispatch(MaxValueAC(JSON.parse(maxValueStr)))
        }
        let startValueStr = localStorage.getItem('startValue')
        if (startValueStr) {
            //setStartValue(JSON.parse(startValueStr))
            dispatch(StartValueAC(JSON.parse(startValueStr)))
        }
    }, [])

    const changeStateCount = () => {
        dispatch(StateValueAC(stateValue + 1))
            console.log('state', stateValue)
    }
    const resetValue = () => {
        dispatch(StateValueAC(startValue))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(StartValueAC(+e.currentTarget.value))
        dispatch(WasPressAC(false))
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(MaxValueAC(+e.currentTarget.value))
        dispatch(WasPressAC(false))
    }
    const clickedFn = () => {
        dispatch(StateValueAC(startValue))
        dispatch(MaxValueAC(maxValue))
        dispatch(WasPressAC(true))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    let errorValue = startValue >= maxValue || startValue < 0

    return (
        <div className="App">
            <div className={'counter'}>
                <Counter stateValue={stateValue} maxValue={maxValue} wasPress={wasPress} errorValue={errorValue}
                         changeStateCount={changeStateCount} resetValue={resetValue}/>
            </div>
            <div className={'counter'}>
                <SettingCounter wasPress={wasPress} errorValue={errorValue} maxValue={maxValue} startValue={startValue}
                                onChangeMaxValue={onChangeMaxValue} onChangeStartValue={onChangeStartValue}
                                clickedFn={clickedFn}/>
            </div>
            <div className={'counter'}>
                <AdditionalCounter setWasPress={onClickButtonSet} stateValue={stateValue} startValue={startValue}
                                   maxValue={maxValue}
                                   wasPress={wasPress} errorValue={errorValue} changeStateCount={changeStateCount}
                                   resetValue={resetValue} clickedFn={clickedFn} onChangeMaxValue={onChangeMaxValue}
                                   onChangeStartValue={onChangeStartValue}/>
            </div>
        </div>
    );
}

export default App;
