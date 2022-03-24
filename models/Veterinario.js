import mongoose from 'mongoose';


const VeterinarioSchema=mongoose.Schema({

nombre:{
  type:String,
  required:true,
   trim:true
},
password:{
 type:String,
trim:true,
required:true
},
correo:{
type:String,
required:true,
unique:true,
trim:true
},
telefono:{
type:String,
default:null,
trim:true

},
web:{
type:String,
default:null

},

token:{
type:String
},
confirmado:{
type:Boolean,
default:false
}

});
//guardamos el modelo y de damos un nuevo ala misma la de la tabla y la guardamos en una variable para utilizarla 
const Veterinario=mongoose.model('Veterinario',VeterinarioSchema);


export default Veterinario;