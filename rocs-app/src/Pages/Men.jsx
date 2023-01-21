import React,{useState} from 'react';
import Products from '../Components/Products';

const shoe=[{name:"rohit",age:"26"

},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"},{name:"kishan",age:"25"}]


const Men = () => {
  const [data,setData]=useState(shoe)
  return (
    <div>
      <h1>Man page</h1>
     <Products data={data}/>
    </div>
  )
}

export default Men
