import { createSlice } from '@reduxjs/toolkit'

const initialState = {}



export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    accountInfo:(state , action)=>{
        return state = action.payload;
    },
    removeAccount:(state )=>{
        return state = {};
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { accountInfo , removeAccount } = accountSlice.actions

export default accountSlice.reducer