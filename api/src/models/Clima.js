const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('Clima', {
    name: {
      type: DataTypes.STRING,
     
    },
    country:{
      type:DataTypes.STRING,
      
    },
    region:{
     type:DataTypes.STRING,
    },
    observation_time:{
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    temperature:{
      type: DataTypes.DECIMAL,
      

    },
    localtime:{
      type: DataTypes.STRING,

    },

  
    weather_icons:{
      type: DataTypes.ARRAY(DataTypes.STRING),
   
      
    },
    
    weather_descriptions:{
    type: DataTypes.ARRAY(DataTypes.STRING),
  


    },
    
    createdInDb: { 
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }, 
  },

  {
    timestamps: false
  }
  

  );
};
