import express, { Request, Response } from "express";
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post(
    '/api/users/signup', [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be between 4 and 20 characters')
    ],
 (req: Request, res: Response) => {
     const errors = validationResult(req); //Extrae los errores

     if(!errors.isEmpty()){ //Comprueba si existen errores
         throw new Error("Invalid email or password!"); //Express captura los errores y los envia a nuestro errorHandler
     }
    const { email, password } = req.body;

    console.log('Creating a user...');
    throw new Error("Error connecting to database");
     

    res.send({});
});

export {router as signupRouter};