import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ChangeFontColor from '../FontColor/FontColorSlice'

const FontColor = () => {
const dispatch = useDispatch()
    const [FontClr ,SetFontClr] = useState()
    return (
  
    <div>
    <input type='text' placeholder='select a color' onChange={(e)=> SetFontClr(e.target.value)} />
<button onClick={()=>{dispatch(ChangeFontColor(FontClr)) }}>change Font Color  </button>

</div>
    )
}

export default FontColor