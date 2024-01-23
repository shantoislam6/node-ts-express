import dotenv from 'dotenv';

export default function init() {

  // init dotenv
  dotenv.config({
    path: __dirname + '/../../.env',
  });



}