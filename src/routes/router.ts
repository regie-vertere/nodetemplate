import  *  as express from 'express';

//@ts-ignore
import getData from '../handlers/getData';
//@ts-ignore
import postData from '../handlers/postData';

const apiRoutes = express.Router();

apiRoutes.get('/data', getData);
apiRoutes.post('/register', postData);

export default apiRoutes;

