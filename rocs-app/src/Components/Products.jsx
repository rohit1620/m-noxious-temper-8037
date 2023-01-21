import React from 'react';
import Item from './Item';

const Products = ({data}) => {
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",gridTemplateRows:"repeat(auto,350px)",gap:"20px",width:"80%",margin:"auto"}}>
        {
            data.map((el)=>{
                return <Item item={el}/>
            })
        }
    </div>
  )
}

export default Products
