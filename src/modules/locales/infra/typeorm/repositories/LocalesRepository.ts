import { getRepository, Repository } from 'typeorm';

import ILocalesRepository from '@modules/locales/repositories/ILocalesRepository';
import ICreateLocaleDTO from '@modules/locales/dtos/ICreateLocaleDTO';

import Locale from '../entities/Locale';

class LocalesRepository implements ILocalesRepository {
  private ormRepository: Repository<Locale>;

  constructor() {
    this.ormRepository = getRepository(Locale);
  }

  public async findById(id: string): Promise<Locale | undefined> {
    const locale = await this.ormRepository.findOne(id);
    return locale;
  }

  public async findByCityName(city: string): Promise<Locale | undefined> {
    const locale = await this.ormRepository.findOne({
      where: { city }
    });

    return locale;
  }

  public async findByStateName(state: string): Promise<Locale | undefined> {
    const locale = await this.ormRepository.findOne({
      where: { state }
    });

    return locale;
  }

  public async save(locale: Locale): Promise<Locale> {
    return this.ormRepository.save(locale);
  }

  public async create({ city, state }: ICreateLocaleDTO): Promise<Locale> {
    const locale = this.ormRepository.create({
      city,
      state
    });

    await this.ormRepository.save(locale);

    return locale;
  }

  // Add custom methods if needed
}

export default LocalesRepository;
