import express from 'express';
import  {ObtenerVeterinario, Perfiles} from '../controllers/VeterinarioControllers.js';
const router =express.Router();

router.get('/',ObtenerVeterinario);

router.get('/login',Perfiles);


export default router;