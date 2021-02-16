import React from 'react'

export default function TitleAndText(props) {

  const { currentKoan } = props;
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl">
      <h2 className="uppercase tracking-wider font-light text-2xl p-2 my-1">
        {currentKoan.title}
      </h2>
      <p className="text-lg border-b-2 border-r-2 border-gray-200 shadow-lg rounded-md p-5 m-5">
        {currentKoan.text}
      </p>
    </div>
    
  )

}