import express from 'express';
import 'dotenv/config';
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(process.env.PORT, () => {console.log(`Server is listening on port ${process.env.PORT_A}`)});


