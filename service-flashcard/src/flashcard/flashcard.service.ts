import { CreateFlashcardInput } from './dto/input/createFlashcard.input';
import { GetFlashcardArgs } from './dto/args/getFlashcards.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entity/flashcard.entity';
import { Injectable } from '@nestjs/common';
import { FlashcardRepository } from './flashcard.repository';

@Injectable()
export class FlashcardService {
  constructor(
    @InjectRepository(FlashcardRepository)
    private flashcardRepository: FlashcardRepository,
  ) {}

  public getFlashcards(
    getFlashcardArgs: GetFlashcardArgs,
  ): Promise<Flashcard[]> {
    return this.flashcardRepository.findAllByCondition(getFlashcardArgs);
  }

  public async createFlashcard(
    createFlashCardInput: CreateFlashcardInput,
  ): Promise<Flashcard> | null {
    const flashcard = new Flashcard();
    flashcard.front = createFlashCardInput.title;
    return this.flashcardRepository.createEntity(createFlashCardInput);
  }
}
