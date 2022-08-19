import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { searchCity } from '../Redux/action'
import { Button } from "reactstrap"
import { BsSearch } from "react-icons/bs"



function Search() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  return (
    <div  style={{width:"30rem"}}>
      <form className="container h-100 d-flex p-5" onSubmit={(e) => {
        e.preventDefault();
        dispatch(searchCity(city))

      }}>
        <input
          className="form-control bg-transparent" id='search' type="search" placeholder="Search" aria-label="Search"
          value={city}
          onChange={e => setCity(e.target.value)
          }
        />

        <Button color="ligth">
          <BsSearch />
        </Button>
      </form>

    </div>
  )
}

export default Search