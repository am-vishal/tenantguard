import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Backend:- TenantGuard backend is live!🫏' });
});

export default app;
