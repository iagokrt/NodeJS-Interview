import { injectable, inject } from 'tsyringe';

import IClientsRepository from '../repositories/IClientsRepository';
import Client from '../infra/typeorm/entities/Client';

interface Request {
  fullname: string;
  email: string;
}

@injectable()
class ListClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}

  public async execute(): Promise<Client[]> {
    const clients = await this.clientsRepository.findAll();

    return clients;
  }
}

export default ListClientsService;
