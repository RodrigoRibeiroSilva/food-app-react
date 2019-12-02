
const INITIAL_STATE = {items: 'opa'}

export default function(state = INITIAL_STATE, action) {
    
    switch(action.type){
        case 'ADD_CARTITEM':
                console.log(action.cartItem)
            return { items: action.cartItem }
        default:
            return state    
    }
}