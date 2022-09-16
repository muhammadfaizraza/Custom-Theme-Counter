import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../Features/Counter/CounterSlice'
import ThemeReducer from  '../Features/theme/ThemeSlice'
import FontColorReduce from '../Features/FontColor/FontColorSlice'


export const store = configureStore({
  reducer: {
    counter : CounterReducer,
theme : ThemeReducer,  
fontcolor : FontColorReduce,
},
 
})  