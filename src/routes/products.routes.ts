import {Router} from "express";
import {listProducts, getProductById, createProduct, deleteProduct, updateProduct} from "../controllers/products.controller.js";

const productsRoutes = Router();

productsRoutes.get('/products',listProducts); 
productsRoutes.get('/products/:id', getProductById);
productsRoutes.post('/products', createProduct);
productsRoutes.put('/products/:id', updateProduct);
productsRoutes.delete('/products/:id', deleteProduct);

export default productsRoutes;