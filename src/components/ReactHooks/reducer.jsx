const reducer = (state,action)=>{
    if(action.type === "add"){
        state = state + 1;
        return state
    }
    if(action.type === "min"){

        state = state - 1;

        let newNum = 0;
        state >= 1 ? (newNum = state -1) : (newNum=0);
        return newNum;
        
        
    }
    return state;


}

export default reducer;