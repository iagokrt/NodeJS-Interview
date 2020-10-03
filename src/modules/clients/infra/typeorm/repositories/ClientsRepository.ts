import { getRepository, Repository } from 'typeorm';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';
import IDeleteClientDTO from '@modules/clients/dtos/IDeleteClientDTO';

import Client from '../entities/Client';

class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findById(id: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id);

    return client;
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne({
      where: { email }
    });

    return client;
  }

  public async findAll(): Promise<Client[]> {
    // let products: Product[]
    const clients = await this.ormRepository.find();
    return clients;
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }

  public async create({
    fullname,
    email,
    password,
    birthday,
    locale_id
  }: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create({
      fullname,
      email,
      password,
      birthday,
      locale_id
    });

    await this.ormRepository.save(client);

    return client;
  }

  public async delete({ id }: IDeleteClientDTO): Promise<void> {
    // findByIds is directly from typeorm
    const clientId = this.ormRepository.findByIds([id]);
    if (!clientId) {
      throw new AppError('cannot delete. id not found');
    }
    await this.ormRepository.delete(id);
  }
  // Add custom methods if need
}

export default ClientsRepository;
