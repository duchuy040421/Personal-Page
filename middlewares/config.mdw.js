import express from "express";
import morgan from "morgan";

export default function (app){
    app.use(express.static('public'));
    app.use(morgan('dev'));
    app.use(express.urlencoded({
        extended: true,
    }));
};
