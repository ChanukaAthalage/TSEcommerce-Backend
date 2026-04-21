import express from 'express';
import cookieParser from 'cookie-parser';
import productsRoutes from './routes/products.routes.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(productsRoutes);

app.listen(3000, () => {  console.log('Server is running on port 3000');
});