import React from 'react';


const CartItem=(props)=> {
        const {price,title,qty}=props.product;
        return(
            <div className="cart-item">
                  <div className="left-block">
                   <img  style={styles.image} src={props.product.img}/>
                  </div>
                  <div className="right-block">
                      <div style={{fontSize:27,color:'blue'}}>{title}</div>
                      <div>Rs.{price}</div>
                      <div>Qty:{qty}</div>
                    <div className="card-items-actions">
                        {
                            /*buttons*/
                        }
                        <img 
                            alt="Increse" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                            onClick={()=>props.onIncreaseQuantity(props.product)}
                        />
                        <img 
                            alt="Decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                            onClick={()=>props.onDecreaseQuantity(props.product)}
                    
                        />
                        <img 
                            alt="Delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png"
                            onClick={()=>props.onDeleteProduct(props.product.id)}
                        
                        />
                    </div>
                    
                  </div>                  

            </div>
        )
    }
const styles={
    image:{
        height:125,
        width:125,
        borderRadius:4,
        background:'lightgrey'
    }
}
export default CartItem;