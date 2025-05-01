const express = require('express');
const connection = require('./connection');
const app = express();
app.use(express.json()); // To understand JSON