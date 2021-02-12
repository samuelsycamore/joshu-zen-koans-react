import React from 'react'

export default function KoanButton ( props ) {

  const { currentKoan, generateNewKoan } = props;
  return (
    <div>
      <button 
      onClick={ () => { generateNewKoan( currentKoan ) }} 
      type="submit"
      className="rounded-md shadow-md m-10 p-3 uppercase text-gray-50 tracking-wider font-thin border border-gray-900"
      >
        click for a koan
      </button>
    </div>
    
  )

}