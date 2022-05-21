import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor()
    {
        super();
        this.state={
            products:[
                {
                    price:10000,
                    title:'Mobile Phone',
                    qty:10,
                    img:'',
                    id:1
                },
                {
                    price:90056,
                    title:'Laptop',
                    qty:12,
                    img:'',
                    id:2
            
                },
                {
                    price:959,
                    title:'Watch',
                    qty:102,
                    img:'',
                    id:3
                },
                {
                    price:2096,
                    title:'Smart Watch',
                    qty:52,
                    img:'',
                    id:4
                },

            ]
        }
    }
    handleIncreaseQuantity=(product)=>{
        const {products}=this.state;  //getting the array of products
        const index=products.indexOf(product); //getting the index of given product
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity=(product)=>{
        const {products}=this.state;  //getting the array of products
        const index=products.indexOf(product); //getting the index of given product
        products[index].qty-=1;
        this.setState({
            products:products
        })
    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;  //getting the array of products
        const items=products.filter((item)=>item.id!==id);
        this.setState({
            products:items
        })
    }
    
    render()
    {
        const {products}=this.state;
        return(
            <div className='cart'>
               {products.map((product)=>{
                   return ( 
                        <CartItem 
                        product={product}
                         key={product.id}
                         onIncreaseQuantity={this.handleIncreaseQuantity}
                         onDecreaseQuantity={this.handleDecreaseQuantity}
                         onDeleteProduct={this.handleDeleteProduct}
                    />)
               })}
            </div>
        )
    }
    
}


export default Cart;