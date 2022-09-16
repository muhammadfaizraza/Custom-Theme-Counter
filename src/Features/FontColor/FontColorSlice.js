import { createSlice } from '@reduxjs/toolkit'

const initialStateData = {
  FontColor: '',
}

export const FontColorSlice = createSlice({
  name: 'fontcolor',
  initialState:initialStateData,
  reducers: {
   
    ChangeFontColor: (state, action) => {
      state.FontColor   = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ChangeFontColor } = FontColorSlice.actions

export default FontColorSlice.reducer