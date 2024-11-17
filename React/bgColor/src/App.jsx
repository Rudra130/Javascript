/* eslint-disable no-unused-vars */
 
import { useState } from 'react'
import Button from './Component/Button'
import Quote from './Quote/Quote'
function App() {
  const [color,setColor] = useState("olive")

  return (

    <>
      {/* <div className='w-full h-screen duration-200'
        style={{backgroundColor:color}}> 
          
      <div className='fixed flex flex-wrap
      justify-center bottom-12 insert-x-0 px-2'>
       
      <div className='flex flex-wrap justify-center 
      gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        
        <Button color='red' onClick={() => setColor('red')}/>
          <Button color='olive' onClick={() => setColor('olive')}/>
          <Button color='cyan' onClick={() => setColor('cyan')}/>
          <Button color='orange' onClick={() => setColor('orange')}/>
          <Button color='black' onClick={() => setColor('black')}/>
          <Button color='green' onClick={() => setColor('green')}/>
          <Button color='yellow' onClick={() => setColor('yellow')}/>
          <Button color='blue' onClick={() => setColor('blue')}/>
          <Button color='purple' onClick={() => setColor('purple')}/>
          <Button color='gray' onClick={() => setColor('gray')}/>
        
        </div>
      </div>
      </div> */}

      <Quote/>
    
      </>
    
  )
}

export default App
