import { container } from 'tsyringe';

import '@modules/clients/providers';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import ClientsRepository from '@modules/clients/infra/typeorm/repositories/ClientsRepository';

import ILocalesRepository from '@modules/locales/repositories/ILocalesRepository';
import LocalesRepository from '@modules/locales/infra/typeorm/repositories/LocalesRepository';

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository
);

container.registerSingleton<ILocalesRepository>(
  'LocalesRepository',
  LocalesRepository
);
