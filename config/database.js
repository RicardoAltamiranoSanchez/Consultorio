import mongoose from 'mongoose';
//hacemos la configuracion de mongo en la nueva version
const ConexionDB= async ()=>{

 try {

const db= await mongoose.connect(`${process.env.MONGO_URL}`,{
	useNewUrlParser:true,
	useUnifiedTopology:true,

});
//solo obtenemos el donde esta el host y el puerto donde esta conectado
const url=`${db.connection.host}:${db.connection.port}`;
console.log(`Conexion Exitosa en mongo url:${url}`);


 } catch (error) {
    console.log(`Hubo un errro en la conexion hacia la base de datos tipo de erro:${error}`)	 
    process.exit(1);

 }
}

export default ConexionDB;