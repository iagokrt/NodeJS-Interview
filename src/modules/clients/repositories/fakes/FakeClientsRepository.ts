import { uuid } from "uuidv4";

import IClientsRepository from "@modules/clients/repositories/IClientsRepository";
import ICreateClientDTO from "@modules/clients/dtos/ICreateClientDTO";

import Client from "../../infra/typeorm/entities/Client";

class FakeClientsRepository implements IClientsRepository {
  private clients: Client[] = [];

  public async findById(id: string): Promise<Client | undefined> {
    const foundById = this.clients.find((client) => client.id === id);
    return foundById;
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    const foundByEmail = this.clients.find(
      (client) => client.email === email
    );

    return foundByEmail;
  }

  public async create(requestData: ICreateClientDTO): Promise<Client> {
    const client = new Client();

    Object.assign(client, { id: uuid() }, requestData);

    this.clients.push(client);

    return client;
  }

  public async save(client: Client): Promise<Client> {
    const findIndex = this.clients.findIndex(
      (findUser) => findUser.id === client.id
    );

    this.clients[findIndex] = client;

    return client;
  }

  // Add custom methods if needed
}

export default FakeClientsRepository;
