import { createStore } from 'redux';
import { reducer } from "./Reducerf"

 export let store= createStore(reducer)


 console.log(store.getState())