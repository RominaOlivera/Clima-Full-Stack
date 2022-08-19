import axios from "axios"



export function searchCity(pais){
    return async function(dispatch){
        var json=await axios (`${process.env.REACT_APP_CLIM}/current?name=${pais}`)
        return dispatch({
            type: "SEARCH_CITY",
            payload:json.data
        })
    }
}
