import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ message: ':- TenantGuard backend is live!🫏' });
});

export default app;
