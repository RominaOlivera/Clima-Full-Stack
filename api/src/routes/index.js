const { Router } = require('express');
const { Clima } = require("../db")
const axios = require("axios")
const {Op} =require("sequelize")
const { YOUR_ACCESS_KEY } = process.env


const router = Router();

const getInfo = async (req, res) => {

    const pais = req.query.name

    if (pais) {
        const paisActual = await Clima.findOne({
            where: {name:{
                [Op.iLike]: "%" + pais + "%" }, 
            }

            
        })

        if (paisActual) {
            const time = paisActual.observation_time
            if (time) {
                res.send(paisActual)
            }
        } else {
            const nuevaConsulta = await axios.get(`http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query=${pais}`)
            
            
            if(!nuevaConsulta.data.hasOwnProperty("error")){
                await Clima.findOrCreate({
                    where: {
                        name: nuevaConsulta.data.location.name,
                        country: nuevaConsulta.data.location.country,
                        region: nuevaConsulta.data.location.region,
                        localtime: nuevaConsulta.data.location.localtime,
                        observation_time: nuevaConsulta.data.current.observation_time,
                        temperature: nuevaConsulta.data.current.temperature,
                        weather_icons: nuevaConsulta.data.current.weather_icons,
                        weather_descriptions: nuevaConsulta.data.current.weather_descriptions

                    }
                })
                res.send(nuevaConsulta.data)
                
            }
            else {
                res.send("Oops there is no such city")
            }
        }
    }

}

router.get("/current", getInfo)



module.exports = router;
