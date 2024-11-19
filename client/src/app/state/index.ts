import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarCollaped: boolean
  isDarkMode: boolean
}
const initialState: initialStateTypes = {
  isSidebarCollaped: false,
  isDarkMode: false,
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollaped = action.payload
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload
    }
  }
})

export const { } = globalSlice.actions
export default globalSlice.reducer
