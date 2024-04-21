import React, { useState } from 'react'

const masterData = ['Hello', 'How are you', 'Mhobbat', 'hum tum', 'kali kali julfo'];

const AutoCompleteComponent = () => {
    const [inputText, setInputText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value
        setInputText(value)
        if(value.length>0){
           const filteredSuggestion = masterData.filter(data => data.toLowerCase().includes(value.toLowerCase()));
           setSuggestions(filteredSuggestion);
        } else {
            setSuggestions([])
        }
    }

  return (
    <div>
        <h1>AutoComplete Component</h1>
        <div className='flex-row'>
            <div className=''>
               <input type='text' value={inputText} onChange={handleInputChange}/>
            </div>
            {suggestions.length>0 && <div>
                <ul>
                    {suggestions.map((suggest, index) => <li key={index} className='cursor-pointer'>{suggest}</li>)}
                </ul>

            </div> }
        </div>

    </div>
  )
}

export default AutoCompleteComponent