import express from "express";
import morgan from "morgan";
import router from './routes/UserRoutes.js';
import mongoose from "mongoose";

const app = express();

app.use(morgan('dev'));
app.use(express.json()); 
app.use('/api/v1', router);

// mongodb connection
mongoose.connect('mongodb+srv://abc123:abcd1234@cluster0.ay3ihrp.mongodb.net/PinMiddlewareDB?retryWrites=true&w=majority')
.then(() => console.log("DB Conneccted"))
.catch((err) => console.log("db error => ", err));

app.listen(8001, () => console.log("Working on port 8000"));