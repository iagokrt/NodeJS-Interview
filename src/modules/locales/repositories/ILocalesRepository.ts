import Locale from '../infra/typeorm/entities/Locale';
import ICreateLocaleDTO from '../dtos/ICreateLocaleDTO';

export default interface ILocalesRepository {
  findById(id: string): Promise<Locale | undefined>;
  findByCityName(city: string): Promise<Locale | undefined>;
  findByStateName(state: string): Promise<Locale | undefined>;
  create(data: ICreateLocaleDTO): Promise<Locale>;
  save(locale: Locale): Promise<Locale>;
  // sign methods here
}
