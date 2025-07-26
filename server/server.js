import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes.js';
import connectDB from './configs/mongodb.js';
import imageRouter from './routes/imageRoutes.js';

// App Config
const PORT = process.env.PORT || 4000
const app = express();
await connectDB()

// Intialize Middlewares
app.use(express.json())
app.use(cors())


// API routes
app.use('/api/user',userRouter)
app.use('/api/image/generate-image',imageRouter)

app.post('/api/image/generate-image', (req,res) => res.send('API is working'))

app.listen(PORT, () => console.log('Server running on port ' + PORT));
