import jsonServer from 'json-server'
import express from 'express'
import morgan from 'morgan'
import { configDotenv } from 'dotenv'
configDotenv()

const PORT = process.env.PORT

const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

const app = express();

app.use(morgan('dev'));
app.use('/static/images', express.static('public/images'));

app.use(middlewares);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is ready http://localhost: ${PORT}`);
});