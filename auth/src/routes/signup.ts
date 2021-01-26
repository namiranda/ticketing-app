import express, { Request, Response } from "express";
import { body, validationResult } from 'express-validator';
import jwt from "jsonwebtoken";

import { User } from '../models/User'
import { RequestValidationError} from '../errors/request-validation-error';
import { BadRequestError } from '../errors/bad-request-error';

const router = express.Router();

router.post(
    '/api/users/signup', 
    [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be between 4 and 20 characters')
    ],
 async (req: Request, res: Response) => {
     const errors = validationResult(req); //Extrae los errores

     if(!errors.isEmpty()){ //Comprueba si existen errores
         throw new RequestValidationError(errors.array()); //Express captura los errores y los envia a nuestro errorHandler
     }
    const { email, password } = req.body;

    const existingUser = await User.findOne({email}); //Si existe un user con el mismo email, se lo asigna a existing user
    //En caso contrario existing user va a ser null

    if(existingUser) {
        throw new BadRequestError('Email in use');
    }

    const user = User.build({ email, password});

    await user.save();

    //Generate JWT
    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, 'asjd');

    //Store it on session object
    req.session = {
        jwt: userJwt
    };

    res.status(201).send(user);
});

export {router as signupRouter};