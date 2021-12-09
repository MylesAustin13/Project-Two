import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";


const Product = (props) => {

    const [itemCount, setItemCount] = useState(1);
    const dispatch = useDispatch();
    const myCart = useSelector(state => state.cartContent);

    const addCount = () => {
        setItemCount(itemCount + 1);
    }

    const subCount = () => {
        if(itemCount > 1){
            setItemCount(itemCount - 1);
        }
        
    }

    const addToCartHandler = () => {
        dispatch({
            type: "AddToCart", obj: {
                info: props.data,
                count: itemCount,
            }
        })
       // console.log("Dispatching!");
    }

    const removeFromCartHandler = () => {
        dispatch({
            type: "RemoveFromCart", obj: {
                info: props.data,
                count: 0,
            }
        })
        //console.log("Dispatching!");
    }



    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={"http://rjtmobile.com/grocery/images/" + props.data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>{props.data.productName}</h5>
                    <p className="card-title">{props.data.unit}</p>

                    <h1><del> {"$" + props.data.mrp}</del> {"$" + props.data.price} </h1>
                    <p className="card-text">{props.data.description}</p>
                    <button className="btn btn-primary btn-block" onClick={addToCartHandler}>Add Donut to Cart</button>
                    <div className="row row-cols-3 justify-content-around">
                        <button className="btn btn-danger" onClick={subCount}>-</button>
                        <input value={itemCount} readOnly/>
                        <button className="btn btn-success" onClick={addCount}>+</button>
                    </div>
                    {
                        myCart.filter(item => item.info._id === props.data._id).length > 0 ?

                            <button className="btn btn-warning btn-block" onClick={removeFromCartHandler}>Remove Donut from Cart</button>

                            :

                            ""
                    }
                </div>
            </div>
        </div>
    )
}
export default Product;