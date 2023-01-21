import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div style={{display:"flex",backgroundColor:"#ffe1ea",marginBottom:"50px",}}>
      <img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/2023_S1_Fuzz_Hero-Product/crocs" alt="" width="50%"/>
    <img src="https://media.crocs.com/images/f_auto,q_auto,dpr_auto/marketing/2023_S1_Fuzz_Hero-Talent-Xl/Crocs" alt="" width="50%" style={{padding:"20px"}}/>
    </div>
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px", width:"60%",margin:"auto" }} className="hover">
      <Link to='/Women' className='Link'> <button style={{padding:"10px 20px",fontWeight:"bold",border:"1px solid black"}}>SHOP'S WOMEN</button></Link>
     
      <Link to='/Men' className='Link'> <button style={{padding:"10px 20px",fontWeight:"bold",border:"1px solid black"}}>SHOP'S MEN</button></Link>
     
      <Link to='Kids' className='Link'><button style={{padding:"10px 20px",fontWeight:"bold",border:"1px solid black"}}>SHOP'S KIDS</button></Link>
      
      <Link to='/Jibbitz' className='Link'><button style={{padding:"10px 20px",fontWeight:"bold",border:"1px solid black",}}>SHOPS'S JIBBITZ</button></Link>
      
    </div>
    <img src="https://media.gettyimages.com/id/1330084625/photo/footwear-is-offered-for-sale-at-a-crocs-retail-store-on-july-22-2021-in-chicago-illinois.jpg?s=612x612&w=gi&k=20&c=Q_ps5xHxC1_pFvZlEm3qwbtlMuk9qYpwzzxAJ03Fk1E=" alt="" width="90%" style={{margin:"auto",marginTop:"50px",height:"500px"}}/>
    <img src="https://media.crocs.com/images/t_mkt-jpg-95,f_auto/marketing/2020DIY-Bedazzled-voila-D/crocs" alt="" width="90%" style={{margin:"auto",marginTop:"10px",height:"500px"}}/>

    <img src="https://www.crocs.in/media/wysiwyg/460173909-literide-upsell-5-pc.png?auto=webp&format=png&quality=85" alt="" width="90%" style={{margin:"auto",marginTop:"10px",height:"500px"}}/>
    
    <img src="https://www.crocs.in/media/wysiwyg/Sale_50_Upsell_2_PC_2_3.png?auto=webp&format=png&quality=85" alt="" width="90%" style={{margin:"auto",marginTop:"10px",height:"500px"}}/>
    </div>
  )
}

export default Home
