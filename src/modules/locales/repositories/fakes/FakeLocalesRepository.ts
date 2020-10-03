import { uuid } from 'uuidv4';

import ILocalesRepository from '@modules/locales/repositories/ILocalesRepository';
import ICreateLocaleDTO from '@modules/locales/dtos/ICreateLocaleDTO';

import Locale from '../../infra/typeorm/entities/Locale';

class FakeLocalesRepository implements ILocalesRepository {
  private locales: Locale[] = [];

  public async findById(id: string): Promise<Locale | undefined> {
    const foundById = this.locales.find(locale => locale.id === id);
    return foundById;
  }

  public async findByCityName(city: string): Promise<Locale | undefined> {
    const foundByCity = this.locales.find(locale => locale.city === city);

    return foundByCity;
  }

  public async findByStateName(state: string): Promise<Locale | undefined> {
    const foundByState = this.locales.find(locale => locale.state === state);

    return foundByState;
  }

  public async findAll(): Promise<Locale[]> {
    const { locales } = this;

    return locales;
  }

  public async create(requestData: ICreateLocaleDTO): Promise<Locale> {
    const locale = new Locale();

    Object.assign(locale, { id: uuid() }, requestData);

    this.locales.push(locale);

    return locale;
  }

  public async save(locale: Locale): Promise<Locale> {
    const findIndex = this.locales.findIndex(find => find.id === locale.id);

    this.locales[findIndex] = locale;

    return locale;
  }

  // delete method

  // Add custom methods if needed
}

export default FakeLocalesRepository;
