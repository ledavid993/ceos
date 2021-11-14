import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entity/flashcard.entity';
import { Inject, Injectable } from '@nestjs/common';
import { FlashcardRepository } from './flashcard.repository';

@Injectable()
export class FlashcardService {
  constructor(
    @InjectRepository(FlashcardRepository)
    private flashcardRepository: FlashcardRepository,
  ) {}

  public async createFlashcard(dto: any): Promise<Flashcard> | null {
    const flashcard = new Flashcard();
    flashcard.front = dto.title;
    return this.flashcardRepository.createEntity(dto);
  }
}
