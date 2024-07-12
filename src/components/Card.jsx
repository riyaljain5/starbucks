import React from 'react'
import { coffee } from '../constants'


const Card = ({id, index, imgurl, title, fat, saturated_fat, active , handleClick}) => {
  return (
    <section className='px-2 py-2 mt-7 mb-10'>
    <div className={`relative flex justify-center items-center  w-[300px] ${active=== id ? "  h-[480px] bg-[#007F5A]" : "h-[350px]  bg-[#EAEAE6] " } rounded-[60px] overflow-hidden`} onClick={() => handleClick(id)}>

        <img src={imgurl} alt="" className='absolute h-[200px] w-[200px] object-cover -top-32 left-[50%] transform -translate-x-1/2 z-10' />
    
    
      {active !== id ?
      (
        <div className='flex flex-col justify-start items-start px-2 ml-6'>
            <h1 className='text-[20px] font-bold ' style={{color:"#A8A094"}}>{title}</h1>
            <p className='mt-9 text-[18px]' style={{color:"#A8A094"}}>Calories</p>

      <div className='flex flex-row justify-between items-center font-semibold' style={{color:"#A8A094"}}>
      <h2 className='mr-24'>Total Fat 19g</h2>
      <p>{fat}</p>
      </div>

      <div className='flex flex-row  font-semibold justify-between items-center' style={{color:"#A8A094"}}>
      <h2 className='mr-[60px]'>Saturated Fat 13g</h2>
      <p>{saturated_fat}</p>
      </div>

      <p className='font-semibold ' style={{color:"#A8A094"}} >Trans Fat 0.5g </p>
      </div>
      )
      :
      (
        <div className="px-8 justify-center flex flex-col ">
            <h1 className='text-white font-bold text-4xl'>{title}</h1>
            <div className='mt-3 flex flex-row justify-between items-center'>
                <h1 className='text-2xl font-semibold' style={{color:"#006043"}}>Size</h1>
                <p className='underline text-md font-normal text-white'>Select a size</p>
            </div>
            <div className='mt-3 flex flex-row justify-between items-center'>
                <h1 className='text-2xl font-semibold' style={{color:"#006043"}}>Milk</h1>
                <p className='underline text-md font-normal text-white'>Select a milk type</p>
            </div>
            <div className='mt-3 flex flex-row justify-between mb-6 items-center'>
                <h1 className='text-2xl font-semibold' style={{color:"#006043"}}>Drink</h1>
                <p className='underline text-md font-normal text-white'>Drink type</p>
            </div>

            <button className='font-bold uppercase rounded-3xl text-[16px] bg-white px-9 py-3' style={{letterSpacing: "2px"}}> add to basket</button>


        </div>

      )
    }
      


    </div>
  </section>
  )
}

export default Card

