
import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component{
    constructor()
    {
        super();
        this.state={
            products:[
                {
                    price:10000,
                    title:'Mobile Phone',
                    qty:10,
                    img:'https://images.unsplash.com/photo-1560617544-b4f287789e24?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsbCUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
                    id:1
                },
                {
                    price:90056,
                    title:'Laptop',
                    qty:12,
                    img:'data:image/jpeg;base64,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',
                    id:2
            
                },
                {
                    price:959,
                    title:'Watch',
                    qty:102,
                    img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500',
                    id:3
                },
                {
                    price:2096,
                    title:'Smart Watch',
                    qty:52,
                    img:'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
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
    getCartCount = () => {
      const { products } = this.state;
  
      let count = 0;
  
      products.forEach((product) => {
        count += product.qty;
      })
  
      return count;
    }

    getCartTotal=()=>{
      const { products } = this.state;
  
      let Total = 0;
  
      products.forEach((product) => {
        Total += product.qty*product.price;
      })
  
      return Total;
    }

    render () {
      const { products } = this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()} />
          <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
          />
        <div style={{fontSize:30,padding:20}}>Total:{this.getCartTotal()}</div>
        </div>
      );
    }
  }
  
export default App;
