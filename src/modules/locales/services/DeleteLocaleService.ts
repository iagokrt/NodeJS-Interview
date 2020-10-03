import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ILocalesRepository from '../repositories/ILocalesRepository';

interface Request {
  id: string;
}

@injectable()
class DeleteLocaleService {
  constructor(
    @inject('LocalesRepository')
    private localesRepository: ILocalesRepository
  ) {}

  public async execute({ id }: Request): Promise<void> {
    const checkLocaleExists = await this.localesRepository.findById(id);

    if (!checkLocaleExists) {
      throw new AppError('Locale not found.', 404);
    }

    await this.localesRepository.delete({ id });
  }
}

export default DeleteLocaleService;
