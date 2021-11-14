import { DeleteResult } from 'typeorm';

export interface BaseInterfaceRepository<T> {
  createEntity(data: T | any): Promise<T>;

  findOneById(id: string | number): Promise<T>;

  findByCondition(filterCondition: any): Promise<T>;

  findAll(): Promise<T[]>;

  removeEntity(id: string | number): Promise<DeleteResult>;

  findWithRelations(relations: any): Promise<T[]>;
}
