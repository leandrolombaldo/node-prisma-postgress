import fastify from "fastify";
import cors from '@fastify/cors';

const app = fastify();

app.register(cors, {
  origin: '*',
});

app.get('/products', async (res, req) => {
  req.status(200).send({ message: 'Hello World' });
});

app.post('/products/:id_products', async (res, req) => {
  req.status(201).send({ message: 'Trip created' });
});

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on http://localhost:3333');
});