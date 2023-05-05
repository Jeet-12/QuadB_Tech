import React from 'react'
import { useParams } from 'react-router-dom'

const Summary = () => {
    const param = useParams();
    console.log(param);
    
  return (
    <h2></h2>
  )
}

export default Summary