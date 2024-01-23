import express from 'express'
import api from './api'
import base from './base'

const routes = express.Router();

routes.use('/', base);
routes.use('/api', api);

routes.use('/404', (req, res) => {
  res.sendStatus(404);
});

routes.use('*', (req, res) => {
  res.redirect('/404');
})

export default routes;
