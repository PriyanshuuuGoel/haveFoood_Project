import {createSlice }  from "@reduxjs/toolkit";


const reactReduxSlice = createSlice({
    name:"slice1",
    initialState:{
        current:[],
        count :0
    },

    reducers:{
        addItems: (state,action)=> {
              state.current.push({...action.payload.card.info ,quantity:1});
              state.count++;
        },

         incrementItems: (state,action)=>{
             const element = state.current.find( (items)=>  items.id == action.payload.card.info.id);
             element.quantity += 1;
             state.count++;
         },

         decrementItems: (state,action)=>{
             const element = state.current.find((items)=> items.id == action.payload.card.info.id);
             if( element.quantity > 1){
                element.quantity -= 1;
             }
             else{ // here we want to remove it from the current 
                state.current = state.current.filter((items)=> items.id != action.payload.card.info.id);
             }

             state.count--;
         }
    }
})


export const {addItems,incrementItems,decrementItems} = reactReduxSlice.actions; // use for Menu


export default reactReduxSlice.reducer;// for store
