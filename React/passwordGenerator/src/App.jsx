
import { useCallback, useState,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber] =useState(false)
  const [character,setCharacter] =useState(false)
  const [password,setPassword] =useState("")
  //useRef hooks
  const passwordRef = useRef(null)



  //useCallback uses memoization for optimization
  const passwordGenerator = useCallback(()=>{
        let pass=""
        let str ="MNBVCXZAQWERTYUIOPLKJHGFDSzxcvbnmasdfghjklqwertyuiop"
       if(number){
        str+="0123456789"
       }
       if(character){
        str+="!@#^&*({}+_:?/\\|<>"
       }
       for(let i=1 ;i<=length ;i++){
        let char = str.charAt(Math.floor(Math.random()*str.length+1))
        pass+=char
       }
       setPassword(pass)

  } ,[length,
    number,character,setPassword])

    const copyPasswordToClipboard =useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,3)
         window.navigator.clipboard.writeText(password) 
    },[password])


    //useEffect re-run the passwordGenerator whenever the any change in the given dependency array
    useEffect(()=>{passwordGenerator()},[length,number,character,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-2'>password generator

      </h1>
     


      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        {/* password field */}
       <input
       type='text'
       value={password}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
       readOnly
       ref={passwordRef}
       />

       <button 
       onClick={copyPasswordToClipboard}
        
       //styling the buttom
       style={{
        backgroundColor: '#1d4ed8', 
        color: 'white',
        padding: '4px 12px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
      }}
      onMouseDown={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
      onMouseUp={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
    
      >copy</button>
    </div>



     <div className='felx text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length :{length}</label>

         {/* number field */}
       <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={number}
          id="numberInput"
          onChange={()=>{
            setNumber((prev)=>!prev)
          }}
          />
          <label className='flex items-center gap-x-6' htmlFor='numberInput'>Number</label>
       </div>


          {/* character field */}
       <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={number}
          id="numberInput"
          onChange={()=>{
            setCharacter((prev)=>!prev)
          }}
          />
          <label className='flex items-center gap-x-6' htmlFor='numberInput'>character</label>
       </div>



      </div>
     </div>
    </div>
    </> 
  )
}

export default App
