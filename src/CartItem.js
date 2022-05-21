import React from 'react';


class CartItem extends React.Component{

    constructor()
    {
        super();
        this.state={
            price:2999,
            title:'Phone',
            qty:11,
            img:''
        }
    }
    increaseQuantity=()=>
    {
        this.setState({
            qty:this.state.qty+1
        });
       
        
    }
    decreaseQuantity=()=>
    {
        if(this.state.qty==0)
        return;
        // using prevState
        this.setState((prevstate)=>{
            return{
                qty:prevstate.qty-1
            }
        })
    }
    delete()
    {

    }
    render()
    {
        const {price,title,qty}=this.props;
        
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
                            onClick={this.increaseQuantity.bind(this)}
                        />
                        <img 
                            alt="Decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                            onClick={this.decreaseQuantity.bind(this)}
                        />
                        <img 
                            alt="Delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png"
                            onClick={this.delete}
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