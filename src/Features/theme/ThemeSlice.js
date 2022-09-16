import { createSlice } from '@reduxjs/toolkit'

const initialStateData = {
  Color: '',
}

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState:initialStateData,
  reducers: {
   
    ChangeThemeColor: (state, action) => {
      state.Color   = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ChangeThemeColor } = ThemeSlice.actions

export default ThemeSlice.reducer