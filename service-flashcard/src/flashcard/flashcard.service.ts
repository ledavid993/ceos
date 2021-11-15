import { CreateFlashcardInput } from './dto/input/createFlashcard.input';
import { GetFlashcardArgs } from './dto/args/getFlashcards.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entity/flashcard.entity';
import { Injectable } from '@nestjs/common';
import { FlashcardRepository } from './flashcard.repository';
import { DeleteResult } from 'typeorm';

@Injectable()
export class FlashcardService {
  constructor(
    @InjectRepository(FlashcardRepository)
    private flashcardRepository: FlashcardRepository,
  ) {}

  public getFlashcards(
    getFlashcardArgs: GetFlashcardArgs | null,
  ): Promise<Flashcard[]> {
    return this.flashcardRepository.findAllByCondition(getFlashcardArgs);
  }

  public createFlashcard(
    createFlashCardInput: CreateFlashcardInput,
  ): Promise<Flashcard> {
    const flashcard = new Flashcard();
    return this.flashcardRepository.createEntity(createFlashCardInput);
  }

  public getFlashcard(id: string): Promise<Flashcard> {
    return this.flashcardRepository.findOneById(id);
  }

  public updateFlashcard(
    updateFlashcardInput: CreateFlashcardInput,
  ): Promise<Flashcard> {
    return this.flashcardRepository.updateEntity(updateFlashcardInput);
  }

  public deleteFlashcard(id: string): Promise<DeleteResult> {
    return this.flashcardRepository.removeEntity(id);
  }
}
