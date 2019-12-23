import { ADD_CARTITEM } from './actionTypes'

export const addItem = (name , price) => {
    return {
        type: ADD_CARTITEM,
        itemName: name,
        itemPrice: price
    }
}