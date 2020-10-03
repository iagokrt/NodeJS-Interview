import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateLocaleService from '@modules/locales/services/CreateLocaleService';
// import ListLocalesService from "@modules/locales/services/ListLocalesService";
// import DeleteLocalesService from "@modules/locales/services/DeleteLocalesService";

export default class LocalesController {
  /* public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = container.resolve(ListProductsService);

    const products = await listProducts.execute();

    return response.json(products);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { city, state } = request.body;

    const createLocale = container.resolve(CreateLocaleService);

    const locale = await createLocale.execute({
      city,
      state
    });

    return response.json(locale);
  }

  /* public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteProduct = container.resolve(DeleteProductService);

    await deleteProduct.execute({ id });

    return response.status(204).json();
  } */
}
