const initState = {
    all: []
}

export default (state=initState, action) => {
    let {type, payload} = action
    switch(type){
        case 'GET_BLOGS':
            return{
                ...state,
                all: payload
            }
        default:
            return state;
    }
}