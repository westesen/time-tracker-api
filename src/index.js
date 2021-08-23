import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

const uri = 'mongodb://127.0.0.1:27019/TaskTracker';
const options = {
    auth: {
        user: 'root',
        password: 'secret'
    },
    authSource: 'admin',
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        })
    })
    .catch(error => {
        throw error;
    });