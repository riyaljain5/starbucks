import React, { useState } from 'react'
import reward from "../assets/rewards.png"
import Card from './Card'
import { coffee } from '../constants'


const Hero = () => {
    const [active, setActive] = useState("1")


  return (
    <section>
        <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col w-[40%] ml-14 '>
            <img src={reward} alt=""
            className='w-[400px] h-[280px]' />
           
        </div>
        <div className='flex flex-col min-w-[100px] items-end justify-end px-6'>
            <h1 className='text-6xl text-wrap font-extrabold text-right ' style={{color: "#008F65"}}>The happiest hour <br/> of the year
            </h1>
            <p className='text-wrap text-[14px] py-3 mt-4 text-gray-500'>
            Sign up to get exclusive access to deals on drinks this holiday season.
        </p>
        <button className='uppercase relative underline  px-4 py-2' style={{ textDecorationColor: "#008F65", letterSpacing: "1px" }}>
            Send me magic
        </button>
        </div>

        
        </div>
        <div className='flex  flex-row  justify-center items-center'>
            {coffee.map((coffe, index)=>(
                <Card key={coffe.id}
                {...coffe}
                index= {index}
                active = {active}
                handleClick = {setActive}
                />
                
            ))}
        </div>

       
        
     

    </section>
  )
}

export default Hero