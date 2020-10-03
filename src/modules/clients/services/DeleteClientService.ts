import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IClientsRepository from '../repositories/IClientsRepository';

interface Request {
  id: string;
}

@injectable()
class DeleteClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}

  public async execute({ id }: Request): Promise<void> {
    const checkClientExists = await this.clientsRepository.findById(id);

    if (!checkClientExists) {
      throw new AppError('Client not found.', 404);
    }

    await this.clientsRepository.delete({ id });
  }
}

export default DeleteClientService;
