import Locale from '../infra/typeorm/entities/Locale';
import ICreateLocaleDTO from '../dtos/ICreateLocaleDTO';
import IDeleteLocaleDTO from '../dtos/IDeleteLocaleDTO';
import IUpdateLocaleDTO from '../dtos/IUpdateLocaleDTO';

export default interface ILocalesRepository {
  findById(id: string): Promise<Locale | undefined>;
  findByCityName(city: string): Promise<Locale | undefined>;
  findByStateName(state: string): Promise<Locale | undefined>;
  findAll(): Promise<Locale[]>;
  create(data: ICreateLocaleDTO): Promise<Locale>;
  save(locale: Locale): Promise<Locale>;
  delete({ id }: IDeleteLocaleDTO): Promise<void>;
  update(data: IUpdateLocaleDTO): Promise<Locale>;
  // sign all methods here
}
