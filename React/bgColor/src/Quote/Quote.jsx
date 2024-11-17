/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Quote = () => {

  const [quote,setQuote] =useState('')
  const [author,setAuthor ]=useState('')
  const [date,setDate] =useState('')
  let [count ,setCount]=useState(0)
    
    const q = async () =>{
    try{
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      setQuote(data.content)
      setAuthor(data.author)
      setDate(data.dateAdded)
     
      setCount(count+1)
      console.log(data)
    }catch(error){
        console.log(error)
        setQuote('error is generated')
        setAuthor('error')
    }
   }
   useEffect(()=>{
    q()
   },[])


  return (

  <div className="text-center p-12">
  <h1 className="text-3xl font-bold mb-4">Random Quotes App</h1>
  <p className="italic text-2xl mb-2">{quote}</p>
  <p className="mb-4">- {author}</p>
  <p className='italic mb-5'>{date}</p>
  <p>{count}</p>

  <button 
    onClick={q} 
    className="mt-5 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
    Get New Quote
  </button>
</div>


  )
}

export default Quote