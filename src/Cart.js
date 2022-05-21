import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{

    render()
    {

        return(
            <div ClassName='cart'>
               <CartItem qty={1} price={99} title={"watch"} img={''}/>

            </div>
        )
    }
    
}


export default Cart;