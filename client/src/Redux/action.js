import axios from "axios"



export function searchCity(pais){
    return async function(dispatch){
        var json=await axios (`http://localhost:3001/current?name=${pais}`)
        return dispatch({
            type: "SEARCH_CITY",
            payload:json.data
        })
    }
}
