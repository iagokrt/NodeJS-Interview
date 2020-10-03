import Client from '../infra/typeorm/entities/Client';
import ICreateClientDTO from '../dtos/ICreateClientDTO';
import IDeleteClientDTO from '../dtos/IDeleteClientDTO';

export default interface IClientsRepository {
  findById(id: string): Promise<Client | undefined>;
  findByEmail(email: string): Promise<Client | undefined>;
  findAll(): Promise<Client[]>;
  create(data: ICreateClientDTO): Promise<Client>;
  save(client: Client): Promise<Client>;
  delete({ id }: IDeleteClientDTO): Promise<void>;
}
