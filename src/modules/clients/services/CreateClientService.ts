import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ILocalesRepository from '@modules/locales/repositories/ILocalesRepository';
import Client from '../infra/typeorm/entities/Client';
import IClientsRepository from '../repositories/IClientsRepository';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface Request {
  fullname: string;
  email: string;
  password: string;
  birthday: Date;
  locale_id: string;
}

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,

    @inject('LocalesRepository')
    private localesRepository: ILocalesRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    fullname,
    email,
    password,
    birthday,
    locale_id
  }: Request): Promise<Client> {
    const checkDuplicateEmail = await this.clientsRepository.findByEmail(email);

    if (checkDuplicateEmail) {
      throw new AppError('cannot register this email');
    }

    const checkLocaleExists = await this.localesRepository.findById(locale_id);

    if (!checkLocaleExists) {
      throw new AppError('locale does not exists in our database');
    }

    const encryptedPassword = await this.hashProvider.generateHash(password);

    const client = await this.clientsRepository.create({
      fullname,
      email,
      password: encryptedPassword,
      birthday,
      locale_id
    });

    return client;
  }
}

export default CreateClientService;
