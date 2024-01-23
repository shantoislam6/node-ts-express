import express from 'express'
import morgan from "morgan";

const Middlewares = express.Router();

// Log HTTP requests to the console
if (process.env.MODE != "production") {
  Middlewares.use(morgan('dev'));
}


export default Middlewares;