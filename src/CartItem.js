import React from 'react';


class CartItem extends React.Component{
    render()
    {
        const {price,title,qty}=this.props.product;
        
        return(
            <div className="cart-item">
                  <div className="left-block">
                   <img  style={styles.image}/>
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
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt="Decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                            onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
                    
                        />
                        <img 
                            alt="Delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png"
                            onClick={()=>this.props.onDeleteProduct(this.props.product.id)}
                        
                        />
                    </div>
                    
                  </div>                  

            </div>
        )
    }
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