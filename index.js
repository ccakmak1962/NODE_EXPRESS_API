import express from 'express';
import bodyParser from 'body-parser';

import coursesRoutes from './routes/courses.js'

const app = express();
const PORT = 3500;
 
app.use(bodyParser.json());
// magic for routing...
app.use('/courses', coursesRoutes);

app.get('/', (req, res) =>{
    console.log('test');
    res.send('Hello world');
})

app.listen(PORT,() => {
    console.log(`Server is Running on port: http://localhost:${PORT}`);
})