import { CreateFlashcardInput } from './dto/input/createFlashcard.input';
import { GetFlashcardsArgs } from './dto/args/getFlashcards.args';
import { GetOneFlashcardArgs } from './dto/args/getOneFlashCard.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entity/flashcard.entity';
import { Injectable } from '@nestjs/common';
import { FlashcardRepository } from './flashcard.repository';
import { DeleteResult } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FlashcardService {
  constructor(
    @InjectRepository(FlashcardRepository)
    private flashcardRepository: FlashcardRepository,
  ) {}

  public async getOneFlashcard(
    getFlashcardArgs: GetOneFlashcardArgs,
  ): Promise<Flashcard> {
    const { uid } = getFlashcardArgs;
    return this.flashcardRepository.findOne({
      uid: uid,
    });
  }

  public getFlashcards(
    getFlashcardsArgs: GetFlashcardsArgs = {},
  ): Promise<Flashcard[]> {
    return this.flashcardRepository.findAll();
  }

  public createFlashcard(
    createFlashCardInput: CreateFlashcardInput,
  ): Promise<Flashcard> {
    return this.flashcardRepository.createEntity({
      uid: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...createFlashCardInput,
    });
  }

  public updateFlashcard(
    updateFlashcardInput: CreateFlashcardInput,
  ): Promise<Flashcard> {
    return this.flashcardRepository.updateEntity(updateFlashcardInput);
  }

  public deleteFlashcard(uid: string): Promise<DeleteResult> {
    return this.flashcardRepository.removeEntity(uid);
  }
}
