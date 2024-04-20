import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'

const Calculator = () => {
    const [value, setValue] = useState('');
    const handleCalculations = (e) => {
        const clickedValue = e.target.textContent;
        const digitRegex = /^[0-9]$/;
        if (digitRegex.test(clickedValue)) {
            setValue((value)=> value + clickedValue)
        } else if (clickedValue === "=") {
            setValue((value)=> eval(value))

        } else if (clickedValue === "AC") {
            setValue((value)=> value.slice(0, -1))

        } else if (clickedValue === "X") {
            setValue('');
        } else {
            const lastChar = value.charAt(value.length - 1);
            if(lastChar === '/' || lastChar === '*' || lastChar === '+' || lastChar === '-'){
                setValue((value)=> value.slice(0,-1) + clickedValue)
            } else {
                setValue((value)=> value + clickedValue)
            }
        }

    }

    return (
        <div>Calculator
            <div className='m-2  border border-black w-32'>
                <span className='p-2 m-4'>{value}</span>
            </div>
            <div onClick={handleCalculations}>
                <div>
                    <button className='ml-3 p-2'>AC</button>
                    <button className='p-2'>X</button>
                    <button className='p-2'>-</button>
                </div>
                <div>
                    <button className='p-2'>1</button>
                    <button className='p-2'>2</button>
                    <button className='p-2'>3</button>
                    <button className='p-2'>/</button>
                </div>
                <div>
                    <button className='p-2'>4</button>
                    <button className='p-2'>5</button>
                    <button className='p-2'>6</button>
                    <button className='p-2'>*</button>
                </div>

                <div>
                    <button className='p-2'>7</button>
                    <button className='p-2'>8</button>
                    <button className='p-2'>9</button>
                    <button className='p-2'>+</button>
                </div>
                <div>
                    <button className='ml-6 p-2'>0</button>
                    <button className='ml-6 p-2'>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator