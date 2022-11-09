import {configureStore, createSlice} from '@reduxjs/toolkit';
let user=createSlice({
    name:'user',
    initialState:{name:'Kim', age:20},
    reducers:{
        changeName(state) {
            return {name:'park',age:20}
        }
    }
})
let Cart=createSlice({
    name:'cart',
    initialState:[
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
    reducers:{
        changeModel (state) {
            state.name[1]="Silver Yordan"
        }
    }
})
export let {changeName}=user.actions;

export default configureStore({
    reducer:{
        cart:Cart.reducer,
        user:user.reducer
    }
})