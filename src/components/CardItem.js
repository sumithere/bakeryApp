import React from "react";
import { connect } from 'react-redux';


function CardItem(props){
    let {cakeImage , cakeName , cakePrice} = {...props}
    let styles={
        height:"9rem",
        width: "100%"
    }
    console.log(props);
    return(
        <div className="card-item">
        <div>
            <img style={styles} src={cakeImage}></img>
            <div className="item-name">{cakeName}</div>
            <div className="item-price">${cakePrice}</div>
        </div>
        
        <button onClick={()=>{
    console.log(props.cart);

            props.add_to_cart({id:props.id,cakeImage,cakeName,cakePrice})
        }} className="add-to-cart">ADD TO CART</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart:state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add_to_cart:(obj)=>{
            console.log(obj);
            return dispatch({
                type:'ADD_TO_CART',
                payload:obj
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
