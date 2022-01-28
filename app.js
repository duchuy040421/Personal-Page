import express from 'express'
import module from "./middlewares/module.mdw.js";

const app = express();
module(app);

