import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRouter from './routes/auth.js';
import projectRouter  from './routes/projects.js';
import skillRouter from './routes/skills.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/auth', authRouter);
app.use('/projects', projectRouter);
app.use('/skills', skillRouter);

app.get('/', (req, res) =>{
    res.send('Bret Guice')
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));