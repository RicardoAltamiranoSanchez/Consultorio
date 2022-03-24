import  Veterinario from '../models/Veterinario.js';
const Registrar=async(req,res)=>{
const {correo} =req.body;
const existe=await Veterinario.findOne({correo});
if(existe){
const error=new Error('Ya existe este usuario');
return res.status(401).json({
msg:"Usuario ya registardo Registrado",
error:error
})

}
//Creamos un nuevo registro ala base de datos
const NuevoVeterinario=new Veterinario(req.body);
try {

//Guardamos el usuario
const NuevoRegistro=await NuevoVeterinario.save();

res.json({
msg:"Nuevo usuario registrado exito",
NuevoRegistro
})


} catch (error) {
console.log(`Hubo un error en el Registro de usuario Error:${error}`)	
}
}
const Login=(req,res)=>{
const datos=Veterinario.findAll();
console.log(datos);
res.json.status(200)({
msg:'Desde el get de perfiles'});
}

export {Registrar,Login}