import express from 'express'

const api = express.Router();

api.get('/', (req: any, res: any) => {
  res.json({
    message: "Hello world"
  })
});



export default api;
