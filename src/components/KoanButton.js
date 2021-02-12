import React from 'react'

export default function KoanButton (props) {

  const { currentKoan, generateNewKoan } = props;
  return (
    <div>
      <button onClick={() => { generateNewKoan(currentKoan) }}
                  type="submit">click for a koan</button>
    </div>
    
  )

}