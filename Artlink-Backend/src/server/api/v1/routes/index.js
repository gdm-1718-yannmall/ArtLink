/*
Import the external libraries:
- express
*/
import express from 'express';

/*
Import the internal libraries:
- museum.routes.js
- category.routes.js
- artPiece.routes.js
*/
import AuthService from '../service';
import authRouter from './auth.routes';
import museumRouter from './museum.routes';
import categoryRouter from './category.routes';
import artPieceRouter from './artPiece.routes';
import userRouter from './user.routes';

// Initialize the AuthService
const authService = new AuthService();

// Define and initiate an express router
const apiV1Router = express.Router();
authRouter(apiV1Router, authService);
museumRouter(apiV1Router, authService);
categoryRouter(apiV1Router, authService);
artPieceRouter(apiV1Router, authService);
userRouter(apiV1Router, authService);

export default apiV1Router;
