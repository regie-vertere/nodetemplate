import express = require('express');

import * as compression from 'compression';
import * as helmet from 'helmet';

//@ts-ignore
import apiRoutes from '../routes/router';

const app = express();

app.use(helmet());

app.use(compression());

app.use('/main', apiRoutes);

app.use(( req : express.Request,
          res : express.Response,
          next: express.NextFunction
        ) => {
                 res.status(404);
                 res.json({ error: 'NOT FOUND' })
                 next();
             }
       );

export default app;