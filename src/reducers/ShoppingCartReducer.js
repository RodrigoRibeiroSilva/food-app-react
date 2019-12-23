import { ADD_CARTITEM } from '../actions/actionTypes'
const INITIAL_STATE = {items: [{itemName: 'teste', itemPrice: 23}], totalPrice: 0}

export const shoppingCartReducer = (state = INITIAL_STATE, action) => {   
    switch(action.type){
        case ADD_CARTITEM:
            let cartItem = {
                itemName: action.itemName,
                itemPrice: action.itemPrice,
                quantity: 0
            }
            var foundItem = state.items
                .find(item => item.itemName === cartItem.itemName)

            if(foundItem){
                foundItem.quantity += 1
                return { ...state, items: state.items, 
                        totalPrice: state.totalPrice += cartItem.itemPrice}
            }else {
                return { ...state, items: state.items.push(cartItem), 
                        totalPrice: state.totalPrice += cartItem.itemPrice}
            }
        default:
            return state    
    }
}   