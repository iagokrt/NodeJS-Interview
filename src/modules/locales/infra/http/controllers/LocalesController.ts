import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateLocaleService from '@modules/locales/services/CreateLocaleService';
import ListLocalesService from '@modules/locales/services/ListLocalesService';
import DeleteLocaleService from '@modules/locales/services/DeleteLocaleService';

export default class LocalesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLocales = container.resolve(ListLocalesService);

    const locales = await listLocales.execute();

    return response.json(locales);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { city, state } = request.body;

    const createLocale = container.resolve(CreateLocaleService);

    const locale = await createLocale.execute({
      city,
      state
    });

    return response.json(locale);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteLocale = container.resolve(DeleteLocaleService);

    await deleteLocale.execute({ id });

    return response.status(204).json();
  }
}
