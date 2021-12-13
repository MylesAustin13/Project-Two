import axios from "axios";
import { createStore } from "redux";

//Initial State
const initialState = {
    loggedIn: false,
    currentCust: {},
    isDiscounted: false,
    discountRate: 0,
    cartContent: [],
    
};

//Reducer Function
const donutReducer = (state = initialState, action) => {

    switch (action.type) {
        case "LogIn":
            console.log(action);
            return {
                ...state,
                loggedIn: true,
                currentCust: action.cust_details
            };
        case "LogOut":
            return {
                ...state,
                loggedIn: false,
                currentCust: {}
            }
        case "AddToCart":
            //console.log(action.obj);
            console.log("HERE");
            console.log(state);
            if (state.cartContent.filter(item => item.info.donut_id === action.obj.info.donut_id).length > 0) { //Item is in the list
                let newItem = state.cartContent.filter(item => item.info.donut_id === action.obj.info.donut_id)[0]; //Get the item
                let fullArray = state.cartContent.filter(item => item.info.donut_id !== action.obj.info.donut_id); //set the array to every item but this one
                newItem.count = action.obj.count; //Add the correct number
                fullArray.push(newItem);
                //console.log(fullArray);
                return {
                    ...state,
                    cartContent: fullArray,
                    
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
            console.log(state)
            if (state.cartContent.filter(item => item.info.donut_id === action.obj.info.donut_id).length > 0) { //Item is in the list
                return {
                    ...state,
                    cartContent: state.cartContent.filter(item => item.info.donut_id !== action.obj.info.donut_id) //Keep the ones that don't match (remove the others)
                };
            }
            break;
        case "SubmitOrder":
            let custOrder = {
                submission_date: new Date().getTime(),
                buyer: state.currentCust,
                donuts_ordered: []
            };
            
            for(let i = 0; i < state.cartContent.length; i++){ //Loop through the cart to get the donuts ordered
                //console.log("I am item " + i);
                for(let j = 0; j < state.cartContent[i].count; j++){ //Add the same donut multiple times, depending on how many are ordered
                    custOrder.donuts_ordered.push(state.cartContent[i].info);
                }
            }
            console.log(custOrder);
             axios.post("http://localhost:8080/orders", custOrder)
             .then(resp => console.log(resp))
             .catch(error => console.error(error));
            return {
                ...state
                
            } //Maybe push to database here? Depends on Spring, I guess
        default:
            break;
    }

    return state;

};


const store = createStore(donutReducer)

export default store;