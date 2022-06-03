import React from 'react'

const Formulaire = ({nom,exp,num,setName,setNumber,setExp}) => {
  return (
    <div className='comp form'>
        
        <input placeholder='**** **** **** ****' type="text" onChange={(e)=>setNumber(e.target.value)}></input>
        <input  placeholder="Your Name"type="text" onChange={(e)=>setName(e.target.value)}></input>
        <input  placeholder='MM/YY' type="text" onChange={(e)=>setExp(e.target.value)}></input>
    </div>
  )
}

export default Formulaire