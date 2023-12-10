import React from 'react'

function Card({user,btnText}) {
    // console.log("Props: ",props);
    console.log(user)
  return (
    <div>
        
        <div>This is the new component of react!
            {btnText}
        </div>

    </div>
  )
}

export default Card