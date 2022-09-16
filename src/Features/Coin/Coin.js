import React from 'react'
import { useSelector } from 'react-redux'

const Coin = () => {
    const count = useSelector((state)=> state.counter.Count)
    
    const ThemeColor = useSelector((state)=> state.theme.Color)
    return (
    <div><p style={{color : ThemeColor }}> Count :{count}</p></div>
  )
}

export default Coin