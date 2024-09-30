import express from 'express';
import authController from "./auth/auth.controller.js";
const app = express();
const port = 3000;

// Middleware untuk menangani request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/api/auth', authController);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Me!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
