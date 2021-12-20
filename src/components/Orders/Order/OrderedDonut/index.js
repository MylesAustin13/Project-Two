import React from "react";

const OrderedDonut = (props) => {
    //console.log(props);

    //console.log(currentUser);

    return (
        <>
            <div className="bg-light">

                <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-dark">{props.donut.donut_name} x{props.count}</li>
                {/* <li class="list-group-item list-group-item-warning">{props.donut.donut_description}</li> */}
                <li class="list-group-item list-group-item-warning">${(props.donut.donut_price * props.count).toFixed(2)}</li>
                </ul>

            </div>

        </>
    )
}
export default OrderedDonut;