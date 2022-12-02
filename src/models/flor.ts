import {Model} from 'sequelize';

interface FlorAttributes{
    Id:number;
    SepalLengthCm:number;
    SepalWidthCm:number;
    PetalLengthCm:number;
    PetalWidthCm:number;
    Species:string;
}

module.exports = (sequelize: any, DataTypes: any)=>{
    class Flor extends Model<FlorAttributes> implements FlorAttributes{
        Id!:number;
        SepalLengthCm!:number;
        SepalWidthCm!:number;
        PetalLengthCm!:number;
        PetalWidthCm!:number;
        Species!:string;
      
      static associate(models:any){
        //No hay relacioneees
      }
    }

    Flor.init({
        Id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true
        },
        SepalLengthCm:{
            type: DataTypes.DECIMAL,
            allowNull:false, 
        },
        SepalWidthCm:{
            type: DataTypes.DECIMAL,
            allowNull:false, 
        },
        PetalLengthCm:{
            type: DataTypes.DECIMAL,
            allowNull:false, 
        },
        PetalWidthCm:{
            type: DataTypes.DECIMAL,
            allowNull:false, 
        },
        Species:{
            type: DataTypes.STRING,
            allowNull:false, 
        }
    },{
        sequelize,
        modelName:'Flor'
    });
    return Flor;
};