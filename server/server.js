import axios from 'axios';
import express from 'express';

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/')