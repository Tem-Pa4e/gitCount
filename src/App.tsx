import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [stateValue, setStateValue] = useState(startValue)
    const [wasPress, setWasPress] = useState(false)



    const changedState = () => {
            setStateValue(stateValue + 1)
    }
    const resetValue = () => {
        setStateValue(startValue)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        setWasPress(false)

    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        setWasPress(false)
    }
    const clickedFn = () => {
        setStateValue(startValue)
        setMaxValue(maxValue)
        setWasPress(true)
    }
    let errorValue = startValue >= maxValue || startValue < 0


    return (
        <div className="App">
            <div className={'counter'}>
                <div className={stateValue === maxValue ? 'errorCountForm' : 'countForm'}>
                    {/*{errorValue ? <div>Incorrect value</div> : stateValue }*/}
                    {!wasPress ? 'Enter value and press set' && errorValue ? <div style={{color: 'red'}}>Incorrect value</div> :  'Enter value and press set' : stateValue }
                </div>
                <div className={'changedForm'}>
                    <button disabled={stateValue === maxValue || !wasPress } onClick={changedState}>inc</button>
                    <button disabled={!wasPress} onClick={resetValue}>reset</button>
                </div>
            </div>
            <div className={'counter'}>
                <div className={'countForm'}>
                <span>
                    max value: <input className={maxValue === startValue ? 'errorInput' : ''} value={maxValue} onChange={onChangeMaxValue} type="number"/>
                </span>
                    <span>
                    start value: <input className={!errorValue ? '' : 'errorInput' } value={startValue} onChange={onChangeStartValue} type="number"/>
                </span>

                </div>

                <div className={'changedForm'}>
                    <button disabled={maxValue === startValue || startValue < 0 || startValue > maxValue}
                            onClick={clickedFn}>set
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
