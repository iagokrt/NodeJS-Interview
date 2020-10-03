import { injectable, inject } from 'tsyringe';

import ILocalesRepository from '../repositories/ILocalesRepository';
import Locale from '../infra/typeorm/entities/Locale';

@injectable()
class ListLocalesService {
  constructor(
    @inject('LocalesRepository')
    private localesRepository: ILocalesRepository
  ) {}

  public async execute(): Promise<Locale[]> {
    const locales = await this.localesRepository.findAll();

    return locales;
  }
}

export default ListLocalesService;
