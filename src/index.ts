import express from "express";
import routes from './routers';
import configs from './configs';
import Middlewares from "./middlewares";

const app = express();

// Configurations
configs();

// Middlewares
app.use('/', Middlewares)

// Routers
app.use('/', routes);

// Start Server
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))





