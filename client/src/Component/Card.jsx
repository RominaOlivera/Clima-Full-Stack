
import React from 'react'
import moment from 'moment'

export default function Card({name,country,temperature,localtime,weather_icons,weather_descriptions}) {
  return (
    <div className='border-2 text-light rounded-3 p-4 card '>
      

      <div className='container ' >
        <div className="row">
        <div className="col-8">

          <div className='w-100 d-flex justify-content-center align-items-center text-justify'>
        <p className=' text-left display-6' style={{fontSize: "2rem"}}>{name}, {country}</p>
        </div>
        <div  className="w-100 d-flex justify-content-center align-items-center">
        <h5 className='display-7 col-6'>{moment({localtime}).format('LLL')}</h5>
        </div>
        

        </div>
        <div className="col-4">
        <div className="w-100 d-flex justify-content-center align-items-center">
        <h1 style={{fontSize: "7rem"}}>{temperature}&deg;</h1>

        </div>
        <div className=' w-100 d-flex justify-content-center align-items-center ' >
        <h4 >{weather_descriptions}</h4>
        </div>

        </div>
        </div>
        
        
         {/* <img src={weather_icons}/>  */}
      </div>


    </div>
  )
}
