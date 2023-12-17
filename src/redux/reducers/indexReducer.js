
import { INDEXCHANGE } from "../actions/actionType";

const defaultSate={
    index:0
}


  const  indexReducer=( state=defaultSate,action)=>{
     
    switch(action.type){
        case INDEXCHANGE:
           return{
           ...state, index:action.payload
           }
      default:
        return state
        
            
    }
  }

   export default indexReducer;