import React from 'react'

export default function TitleAndText(props) {

  const { currentKoan } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">{currentKoan.title}</h2>
      <p>{currentKoan.text}</p>
    </div>
    
  )

}