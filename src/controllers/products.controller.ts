import type { Request, Response } from 'express';

export const listProducts = (req: Request, res: Response) => {
  res.json({ message: 'List of products' });
};

export const getProductById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Details of product with id ${id}` });
};

export const createProduct = (req: Request, res: Response) => {
  res.json({ message: 'Product created' });
};  

export const updateProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Product with id ${id} updated` });
}

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Product with id ${id} deleted` });
}

