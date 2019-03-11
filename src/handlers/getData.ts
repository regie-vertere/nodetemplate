import { Request, Response } from 'express';

const getData = (req: Request, res: Response) => {
    res.send('Hello from Regie')
}

export default getData;