import { BaseInterfaceRepository } from './base.interface.repository';
import { DeleteResult, Repository } from 'typeorm';

export class BaseAbstractRepository<T>
  extends Repository<T>
  implements BaseInterfaceRepository<T>
{
  constructor() {
    super();
  }
  public async createEntity(data: T | any): Promise<T> {
    return await this.save(data);
  }

  public async findOneById(id: string | number): Promise<T> {
    return await this.findOne(id);
  }

  public async findByCondition(filterCondition: any): Promise<T> {
    return await this.findOne({ where: filterCondition });
  }

  public async findWithRelations(relations: any): Promise<T[]> {
    return await this.find(relations);
  }

  public async findAll(): Promise<T[]> {
    return await this.find();
  }

  public async findAllByCondition(filterCondition: any): Promise<T[]> {
    return await this.find({ where: filterCondition });
  }

  public async removeEntity(id: string | number): Promise<DeleteResult> {
    return await this.delete(id);
  }

  public async updateEntity(data: T | any): Promise<T> {
    return await this.save(data);
  }
}
