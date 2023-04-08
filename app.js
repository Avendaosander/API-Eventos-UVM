const express = require('express')
const userRoutes=require('./routes/user')
const authRoutes=require('./routes/auth')
const routerApp = require("./routes/routerApp");
const routerEvents = require("./routes/routerEvents");
const path = require("path");
const morgan = require('morgan')
require('dotenv').config();
// MongoDB Connection
require('./database/db');

// Cors
const cors = require("cors");
const corsOptions = {
   credentials: true,
   origin: process.env.PATHCORS || '*',
   methods: ['GET', 'POST']
};

// Swagger
const swaggerUiExpress = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerSpec = {
   definition: {
      openapi: "3.1.0",
      info: {
         title: "API Events UVM Documentation",
         version: "1.0.0"
      },
      servers: [
         {
            url: "http://localhost:3000"
         }
      ]
   },
   apis: [`${path.join(__dirname,"./routes/*.js")}`]
}

// Settings
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/documentacion", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerJSDoc(swaggerSpec)));

// Routes
app.use("/app", routerApp);
app.use("/events", routerEvents);
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
// app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;