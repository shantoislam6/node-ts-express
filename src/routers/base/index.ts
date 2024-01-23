import express from 'express'

const base = express.Router();

base.get('/', (req: any, res: any) => {
  res.json({
    message: "Hello world"
  })
});



export default base;
