import express from 'express'
import module from "./middlewares/module.mdw.js";
// import async_errors from 'express-async-errors';

const app = express();
module(app);

