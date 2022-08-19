const initialState={
    City:{},
    
}


function rootReducer(state=initialState,action){
    switch(action.type){
        case "SEARCH_CITY":
            return{
                ...state,
                City:action.payload
            }
       



default:
          return state;

    }
}



export default rootReducer;