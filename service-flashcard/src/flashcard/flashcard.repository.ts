import { BaseAbstractRepository } from '../repositories/base/base.repository';
import { EntityRepository, Repository } from 'typeorm';
import { Flashcard } from './entity/flashcard.entity';

@EntityRepository(Flashcard)
export class FlashcardRepository extends BaseAbstractRepository<Flashcard> {}
