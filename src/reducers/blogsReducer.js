const initState = {

}

export default (state=initState, action) => {
    let {type, payload} = action
    switch(type){
        default:
            return state;
    }
}