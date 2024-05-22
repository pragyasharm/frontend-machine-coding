import React, { useEffect, useState } from 'react'

const SearchPage = () => {
   const [searchQuery, setSearchQuery] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [displaySuggestion, setDisplaySuggestion] = useState(false)


  useEffect(()=>{
    const timer = setTimeout(()=> {     
        getSearchSuggestion()
    }, 200)
    return ()=> {
        clearTimeout(timer);
    }
  }, [searchQuery])

 const getSearchSuggestion = async() => {
    const response = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery)
    const data = await response.json();
    setSearchResult(data[1])
    console.log("Api called");
 }

  return (
    <div className='relative'>
        <div className='flex justify-center'>
           <h1 className='text-6xl'>Search bar</h1>
        </div>
        <div className='flex mt-12 justify-center'>
            <input type='text' placeholder='Search your text here' onBlur={()=> setDisplaySuggestion(false)} onChange={(e)=> {setSearchQuery(e.target.value) 
            }} onFocus={() => setDisplaySuggestion(true)} className='border border-black rounded-lg p-2 w-72'/>
            <button className='ml-4'>
            <img className='w-8' src={require('./magnifying-glass.png')} alt="magnifying-glass"/>
            </button>
        </div>
        { searchResult && 
        <div className='flex justify-center'>
            <ul className='w-80 shadow-md'>
                { displaySuggestion && searchResult.map((text, index)=>{return <li key={index} className='border-t-[1px] pt-2 border-gray-300'>{text}</li>})}
            </ul>
        </div>

        }
    </div>
  )
}

export default SearchPage