  
const initialState = {
  item_details : {}
}
function rootReducer  (state = initialState, action) {
    switch (action.type) {
      case 'GET_ENQUIRY_DETAIL':
        return {...state , item_details : action.payload};
     
      default:
        return state
    }
  }

  export default rootReducer;