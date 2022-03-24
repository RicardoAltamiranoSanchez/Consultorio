import express from 'express';
import  {Registrar,Login} from '../controllers/VeterinarioControllers.js';
const router =express.Router();

router.get('/login',Login);
router.post('/',Registrar);





export default router;