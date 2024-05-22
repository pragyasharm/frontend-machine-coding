import React, { useState } from 'react'

const masterData = ['Hello', 'How are you', 'Mhobbat', 'hum tum', 'kali kali julfo', 'meenal', 'meenakshi'];

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

 const handleSelectedValue = (e) => {
    setInputText(e.target.textContent)
    setSuggestions([])
 }

  return (
    <div>
        <h1>AutoComplete Component</h1>
        <div className='flex-row'>
            <div className=''>
               <input type='text' className='border border-gray-900 rounded-md' value={inputText} onChange={handleInputChange}/>
            </div>
            {suggestions.length>0 && <div>
                <ul onClick={handleSelectedValue}>
                    {suggestions.map((suggest, index) => <li key={index} className='cursor-pointer'>{suggest}</li>)}
                </ul>

            </div> }
        </div>

    </div>
  )
}

export default AutoCompleteComponent