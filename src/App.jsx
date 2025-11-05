import React, { useEffect } from 'react'
import Homepage from './Pages/Homepage'
import { initFlowbite } from 'flowbite'




const App = () => {
    useEffect(() => {
      initFlowbite();
    }, [])
  return (
    <div>
       
        <Homepage/>
    </div>
  )
}

export default App