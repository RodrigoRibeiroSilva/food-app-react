import { ADD_CARTITEM } from '../actions/actionTypes'
const INITIAL_STATE = {items: [], totalPrice: 0}

export const shoppingCartReducer = (state = INITIAL_STATE, action) => {   
    console.log(state.items)
    switch(action.type){
        case ADD_CARTITEM:                
            let cartItem = {
                itemName: action.itemName,
                itemPrice: action.itemPrice,
                quantity: 1
            }
            let foundItem = state.items
                .find(item => item.itemName === cartItem.itemName)
            
            if(foundItem){
                foundItem.quantity += 1
                return { ...state, 
                            totalPrice: state.totalPrice += foundItem.itemPrice }
            }else {
                return { ...state, items: state.items.concat(cartItem), 
                            totalPrice: state.totalPrice+= cartItem.itemPrice }
            }
            
        default:
            return state    
    }
}   