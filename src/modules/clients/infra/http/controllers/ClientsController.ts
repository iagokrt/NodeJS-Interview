import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClientService from '@modules/clients/services/CreateClientService';
import ListClientsService from '@modules/clients/services/ListClientsService';
import DeleteClientService from '@modules/clients/services/DeleteClientService';
import UpdateClientService from '@modules/clients/services/UpdateClientService';

export default class ClientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listClients = container.resolve(ListClientsService);

    const clients = await listClients.execute();

    return response.json(clients);
  }

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

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteClient = container.resolve(DeleteClientService);

    await deleteClient.execute({ id });

    return response.status(204).json();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const client_id = req.user.id;
    const { name, email } = req.body;

    const updateProfile = container.resolve(UpdateClientService);

    const client = await updateProfile.execute({
      name,
      email,
      client_id
    });

    return res.json(client);
  }
}
