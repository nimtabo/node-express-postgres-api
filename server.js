import express from 'express';
// import bodyParser from 'body-parser';

import Reflection from './src/UsingJsonObject/controllers/Reflection';

const app = express();
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());

app.get('/', (req, res)=> {
  return res.status(200).send({message: "Working !!!!!!!!"});
});

app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);

app.listen(3000, () => {
  console.log('app running on port ', 3000);
});