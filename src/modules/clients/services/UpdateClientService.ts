import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Client from '../infra/typeorm/entities/Client';
import IClientsRepository from '../repositories/IClientsRepository';

interface IRequest {
  client_id: string;
  name: string;
  email: string;
}

@injectable()
class UpdateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}

  public async execute({ client_id, name, email }: IRequest): Promise<Client> {
    const client = await this.clientsRepository.findById(client_id);

    if (!client) {
      throw new AppError('Client not found');
    }

    const clientWithUpdatedEmail = await this.clientsRepository.findByEmail(
      email
    );

    if (clientWithUpdatedEmail && clientWithUpdatedEmail.id !== client_id) {
      throw new AppError('cannot change to this email. Email Already in use');
    }

    Object.assign(client, { name, email });

    /* if (password && !old_password) {
        throw new AppError(
          'You need to inform the old password to set a new password',
        );
      }

      if (password && old_password) {
        const checkOldPassword = await this.hashProvider.comapreHash(
          old_password,
          user.password,
        );

        if (!checkOldPassword) {
          throw new AppError('Old password does not match');
        }

        user.password = await this.hashProvider.generateHash(password);
      } */

    return this.clientsRepository.save(client);
  }
}

export default UpdateClientService;
