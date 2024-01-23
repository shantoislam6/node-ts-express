import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();
dotenv.config({
  path: __dirname + '/../.env',
});

// Log HTTP requests to the console
if (process.env.MODE != "production") {
  app.use(morgan('dev'));
}

app.get('/', (req: any, res: any) => {
  res.json({
    message: "Hello world"
  })
})

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))




