import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/auth-route';

const app = express();
app.use(express.json());
app.use()
app.use("/api/auth", authRoutes);
app.listen(process.env.PORT, () => {console.log(`Server is listening on port ${process.env.PORT}`)});


