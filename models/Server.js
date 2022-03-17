import express from 'express';
import  cors from 'cors';
import  ConexionDB from '../config/database.js';
import VeterinariosRouter from '../routers/Veterinario.js';

class Servidor{
    constructor(){
      this.app=express();
//nota revisar el puerto  o los permiso ya son varias app que no me deja usar los .env para los puertos

      this.PORT=6000;
       this.Paths={    veterinarios:'/Api/Veterinarios',}
 this.ConexionDB();
    this.Middlewares();      
      this.Router();

    }  
    async  ConexionDB(){
           await ConexionDB();
    }
    
    Middlewares() {
  this.app.use(cors());

      this.app.use( express.json());
        


        this.app.use(express.static('public'));

       
    }
  Router(){
     
      this.app.use(this.Paths.veterinarios,VeterinariosRouter);
    }
    Encendiendo(){
         this.app.listen(this.PORT,() => {
         console.log("Iniciando Servidor en el puerto:",this.PORT);   
                })
    };

}

export default Servidor;
