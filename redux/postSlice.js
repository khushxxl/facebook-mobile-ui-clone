import { createSlice } from '@reduxjs/toolkit'

const postSlice = createSlice({
  name: 'post',
  initialState: {
    texts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.texts.push(action.payload)
    },

    reset: (state) => {
      state = initialState
    },
  },
})

export const { addPost } = postSlice.actions

export default postSlice.reducer
