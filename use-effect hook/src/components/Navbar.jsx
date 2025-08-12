import React,{useEffect} from 'react'
useEffect(() => {
  
alert("color was change")
 
}, [color])


const navbar = ({color}) => {
  return (
    <div>i m navbar with colour{color}</div>
  )
}

export default navbar