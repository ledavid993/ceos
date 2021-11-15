import { UpdateResult } from 'typeorm';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetFlashcardArgs } from './dto/args/getFlashcards.args';
import { CreateFlashcardInput } from './dto/input/createFlashcard.input';
import { Flashcard } from './entity/flashcard.entity';
import { FlashcardService } from './flashcard.service';

@Resolver(() => Flashcard)
export class FlashcardResolver {
  constructor(private readonly flashcardService: FlashcardService) {}

  // @Query(() => Flashcard)
  // getFlashcard(@Args('id') id: string) {
  //   return this.flashcardService.getFlashcard(id);
  // }

  @Query(() => [Flashcard])
  getFlashcards(@Args() getFlashcardArgs: GetFlashcardArgs) {
    return this.flashcardService.getFlashcards(getFlashcardArgs);
  }

  @Mutation(() => Flashcard)
  createFlashcard(@Args() createFlashcardInput: CreateFlashcardInput) {
    return this.flashcardService.createFlashcard(createFlashcardInput);
  }

  // @Mutation(() => Flashcard)
  // updateFlashcard(@Args() updateFlashcardInput: CreateFlashcardInput) {
  //   return this.flashcardService.updateFlashcard(updateFlashcardInput);
  // }
}
