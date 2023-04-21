import { createSlice } from '@reduxjs/toolkit'

const iniateState = [
    { id: 1, title: 'First Post!', content: 'Hello!' },
    { id: 2, title: 'Second Post!', content: 'More text'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState: iniateState,
    reducers: {}
})

export default postsSlice.reducer
