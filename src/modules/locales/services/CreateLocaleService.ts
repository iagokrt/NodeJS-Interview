import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Locale from '../infra/typeorm/entities/Locale';
import ILocalesRepository from '../repositories/ILocalesRepository';

interface IRequest {
  city: string;
  state: string;
}

@injectable()
class CreateLocaleService {
  constructor(
    @inject('LocalesRepository')
    private localesRepository: ILocalesRepository
  ) {}

  public async execute({ city, state }: IRequest): Promise<Locale> {
    const checkDuplicateCity = await this.localesRepository.findByCityName(
      city
    );
    if (checkDuplicateCity) {
      throw new AppError('Cannot register same city twice');
    }

    const locale = await this.localesRepository.create({
      city,
      state
    });

    return locale;
  }
}

export default CreateLocaleService;
