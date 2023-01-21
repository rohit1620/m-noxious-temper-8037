import React from 'react'

const Item = ({item}) => {
    const {name,image,p1,p2,num,b1,b2,b3,b4,b5}=item
  return (
    <div style={{border:"1px solid black"}}>
    <img src={image} alt="" />
    <p>{name}</p>
    <p><span style={{fontSize:"25px",color:"black",marginTop:"5px"}}>*****</span>{num}</p>
    <p><span style={{color:"red"}}>${p1}</span> to ${p2}</p>
    <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"20px"}}>
        <div style={{width:"25px",height:"25px", border:"1px solid black",borderRadius:"50%",
    backgroundColor:`${b1}`}}></div>
        <div style={{width:"25px",height:"25px", border:"1px solid black",borderRadius:"50%",backgroundColor:`${b2}`}}></div>
        <div style={{width:"25px",height:"25px", border:"1px solid black",borderRadius:"50%",backgroundColor:`${b3}`}}></div>
        <div style={{width:"25px",height:"25px", border:"1px solid black",borderRadius:"50%",backgroundColor:`${b4}`}}></div>
        <div style={{width:"25px",height:"25px", border:"1px solid black",borderRadius:"50%",backgroundColor:`${b5}`}}></div>
    </div>
    </div>
  )
}

export default Item
