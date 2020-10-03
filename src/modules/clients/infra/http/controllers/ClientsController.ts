import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClientService from '@modules/clients/services/CreateClientService';

export default class ClientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { fullname, email, password, birthday, locale_id } = request.body;

    const createClient = container.resolve(CreateClientService);

    const client = await createClient.execute({
      fullname,
      email,
      password,
      birthday,
      locale_id
    });

    delete client.password;

    return response.json(client);
  }
}
