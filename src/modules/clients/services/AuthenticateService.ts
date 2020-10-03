import { injectable, inject } from 'tsyringe';

import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';

import Client from '../infra/typeorm/entities/Client';
import IClientsRepository from '../repositories/IClientsRepository';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface Request {
  email: string;
  password: string;
}

interface Response {
  client: Client;
  token: string;
}

@injectable()
class AuthenticateService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute({ email, password }: Request): Promise<Response> {
    const client = await this.clientsRepository.findByEmail(email);

    if (!client) {
      throw new AppError('Authentication Error', 401);
    }

    const trustedPassword = await this.hashProvider.compareHash(
      password,
      client.password
    );

    if (!trustedPassword) {
      throw new AppError('Authentication Error', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: client.id,
      expiresIn
    });

    return {
      client,
      token
    };
  }
}

export default AuthenticateService;
