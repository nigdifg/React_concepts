import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Github() {
        const [data,setData] = useState([])
        useEffect(()=>{
            fetch('https://api.github.com/users/nigdifg')
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                setData(data)
            })
        },[])

  return (
    <>
    <div className='m-4 bg-gray-600 text-teal-50 p-4 text-3xl'>
        
        <span className='text-left'>{data.name}</span>
        <br/>
        <span> Github followers:{data.followers}  </span>
        
        <img className='text-center' src={data.avatar_url} alt='github Profile' width={300}/>
        
    </div>
    
    </>
  )
}

export default Github;