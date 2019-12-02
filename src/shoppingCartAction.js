export function clickValue(e) {
    console.log('clickValue')
    console.log(e)
    return {
        type: 'ADD_CARTITEM',
        cartItem: e
    }
}