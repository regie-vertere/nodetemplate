
import { Request, Response } from 'express';

const postData = (req: Request, res: Response) => {
    res.send('Hello from Regie')
}

export default postData;