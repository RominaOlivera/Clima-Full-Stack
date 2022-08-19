import React from 'react'
import {useSelector } from "react-redux"
import Card from './Card'
import Search from './search'




export default function Home() {

  const City = useSelector(state => state.City)



  return (
    <div >
      <h2 className=' display-4 text-center text-light p-4'>The weather</h2>
      <h4 className='text-light'>¡Search for the climate of the city you prefer!</h4>
      <div className="container ">
        <div className='col'>
          <div className="d-flex justify-content-center align-items-center">
            <Search />
          </div>
          <div className=' d-flex justify-content-center align-items-center card2'>
          {typeof City === "string"?
             <h2 className='text-light'>¡Oops there is no such city!</h2>:
          Object.keys(City).length >  1? <Card
            name={City.location?.name ? City.location?.name : City.name}
            country={City.location?.country ? City.location?.country : City.country}
            localtime={City.location?.localtime ? City.location?.localtime : City.localtime}
            temperature={City.current?.temperature ? City.current?.temperature : City.temperature}
            weather_icons={City.current?.weather_icons ? City.current?.weather_icons : City.weather_icons}
            weather_descriptions={City.current?.weather_descriptions ? City.current?.weather_descriptions : City.weather_descriptions}

          /> : null
       
          }
          </div>
</div>
        </div>


      </div>
    
  )
}
