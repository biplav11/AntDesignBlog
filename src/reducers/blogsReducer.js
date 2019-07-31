const initState = {
    all: [],
    single: {}
}

export default (state=initState, action) => {
    let {type, payload} = action
    switch(type){
        case 'GET_BLOGS':
            return{
                ...state,
                all: payload
            }
        case 'GET_BLOG_BY_ID':
            return{
                ...state,
                single: payload
            }
        default:
            return state;
    }
}