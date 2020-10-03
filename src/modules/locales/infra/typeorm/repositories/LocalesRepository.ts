import { getRepository, Repository } from 'typeorm';

import ILocalesRepository from '@modules/locales/repositories/ILocalesRepository';

import ICreateLocaleDTO from '@modules/locales/dtos/ICreateLocaleDTO';
import IDeleteLocaleDTO from '@modules/locales/dtos/IDeleteLocaleDTO';

import AppError from '@shared/errors/AppError';

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

  public async findAll(): Promise<Locale[]> {
    // let products: Product[]
    const locales = await this.ormRepository.find();
    return locales;
  }

  public async create({ city, state }: ICreateLocaleDTO): Promise<Locale> {
    const locale = this.ormRepository.create({
      city,
      state
    });

    await this.ormRepository.save(locale);

    return locale;
  }

  public async save(locale: Locale): Promise<Locale> {
    return this.ormRepository.save(locale);
  }

  public async delete({ id }: IDeleteLocaleDTO): Promise<void> {
    // findByIds is directly from typeorm
    const localeId = this.ormRepository.findByIds([id]);

    if (!localeId) {
      throw new AppError('cannot delete. id not found');
    }

    await this.ormRepository.delete(id);
  }

  // Add custom methods if needed
}

export default LocalesRepository;
