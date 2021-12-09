import { createStore } from "redux";

//Initial State
const initialState = {
    loggedIn: false,
    isDiscounted: false,
    discountRate: 0,
    cartContent: []
    
};

//Reducer Function
const donutReducer = (state = initialState, action) => {

    switch (action.type) {
        case "AddToCart":
            if (state.cartContent.filter(item => item.info.productName === action.obj.info.productName).length > 0) { //Item is in the list
                let newItem = state.cartContent.filter(item => item.info._id === action.obj.info._id)[0]; //Get the item
                let fullArray = state.cartContent.filter(item => item.info._id !== action.obj.info._id); //set the array to every item but this one
                newItem.count = action.obj.count; //Add the correct number
                fullArray.push(newItem);
                //console.log(fullArray);
                return {
                    ...state,
                    cartContent: fullArray
                };
            }
            else{
                return {
                    ...state,
                    cartContent: [...state.cartContent, action.obj]
                };
            }

        case "RemoveFromCart":
            // console.log(state);
            //  console.log(action.obj);
            //console.log(state.cartContent.filter(item => item.info.productName === action.obj.info.productName))
            //console.log(state.cartContent.filter(item => item.info.productName !== action.obj.info.productName));
            if (state.cartContent.filter(item => item.info.productName === action.obj.info.productName).length > 0) { //Item is in the list
                return {
                    ...state,
                    cartContent: state.cartContent.filter(item => item.info.productName !== action.obj.info.productName) //Keep the ones that don't match (remove the others)
                };
            }
            break;
        case "SubmitOrder":
            return {
                ...state
                
            } //Maybe push to database here? Depends on Spring, I guess
    }
    return state;

};


const store = createStore(donutReducer)

export default store;