import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWord(request: Request, response: Response) {
    const user = createUser({
        email: 'pedro@gmail.com',
        password: '123',
        techs: [
            'PHP',
            'React',
            'NodeJs',
            { title: 'JavaScript', experience: 15 },
             

        ]
    });



    return response.json({ message: 'hello world' });
}