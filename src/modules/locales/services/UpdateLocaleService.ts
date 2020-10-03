import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Locale from '../infra/typeorm/entities/Locale';
import ILocalesRepository from '../repositories/ILocalesRepository';

interface Request {
  id: string;
  city: string;
  state: string;
}

@injectable()
class UpdateLocaleService {
  constructor(
    @inject('LocalesRepository')
    private localesRepository: ILocalesRepository
  ) {}

  public async execute({ id, city, state }: Request): Promise<Locale> {
    const checkLocaleExists = await this.localesRepository.findById(id);

    if (!checkLocaleExists) {
      throw new AppError('Locale not found.', 404);
    }

    const updatedLocale = await this.localesRepository.update({
      city,
      state
    });

    return updatedLocale;
  }
}

export default UpdateLocaleService;
