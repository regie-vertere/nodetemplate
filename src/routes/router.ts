import  *  as express from 'express';


import { get } from '../handlers/getData';
import { post } from '../handlers/postData';

const apiRoutes = express.Router();

apiRoutes.get('/data', get);
apiRoutes.post('/register', post);

export default apiRoutes;

