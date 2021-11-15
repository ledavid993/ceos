import { UpdateResult } from 'typeorm';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetFlashcardsArgs } from './dto/args/getFlashcards.args';
import { CreateFlashcardInput } from './dto/input/createFlashcard.input';
import { Flashcard } from './entity/flashcard.entity';
import { FlashcardService } from './flashcard.service';
import { GetOneFlashcardArgs } from './dto/args/getOneFlashCard.args';

@Resolver(() => Flashcard)
export class FlashcardResolver {
  constructor(private readonly flashcardService: FlashcardService) {}

  @Query(() => Flashcard)
  getOneFlashcard(@Args() getOneFlashcardArgs: GetOneFlashcardArgs) {
    return this.flashcardService.getOneFlashcard(getOneFlashcardArgs);
  }

  @Query(() => [Flashcard])
  getFlashcards(@Args() getFlashcardsArgs: GetFlashcardsArgs | null) {
    return this.flashcardService.getFlashcards(getFlashcardsArgs);
  }

  @Mutation(() => Flashcard)
  createFlashcard(
    @Args('createFlashCard') createFlashcardInput: CreateFlashcardInput,
  ) {
    return this.flashcardService.createFlashcard(createFlashcardInput);
  }

  @Mutation(() => Flashcard)
  updateFlashcard(
    @Args('updateFlashCard') updateFlashcardInput: CreateFlashcardInput,
  ) {
    return this.flashcardService.updateFlashcard(updateFlashcardInput);
  }

  @Mutation(() => Flashcard)
  deleteFlashcard(@Args('id') id: string) {
    return this.flashcardService.deleteFlashcard(id);
  }
}
