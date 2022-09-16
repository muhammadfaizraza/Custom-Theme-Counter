import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './CounterSlice'

const Couter = () => {

const count = useSelector((state)=> state.counter.Count)
const dispatch = useDispatch()

  return (
    <div className="App">
<button  onClick={()=>dispatch(increment())}>Add 1</button>
<p>Coin Value : {count}</p>
<button onClick={()=>dispatch(decrement())} >Decrease 1 </button>
<button onClick={()=>dispatch(incrementByAmount(5)) }> Add 5</button>
</div>

  )
}

export default Couter