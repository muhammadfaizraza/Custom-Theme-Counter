
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChangeThemeColor } from './ThemeSlice'


const Theme = () => {
    const dispatch = useDispatch()
 const [Color ,SetColor] = useState('yellow')
    return (
    <div>
        <input type='text' placeholder='select a color' onChange={(e)=> SetColor(e.target.value)} />
<button onClick={()=>{dispatch(ChangeThemeColor(Color)) }}>change FontColor  </button>

    </div>
  )
}

export default Theme