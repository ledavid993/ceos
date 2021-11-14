import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FlashcardArgs } from './dto/args/flashcard.args';
import { Flashcard } from './entity/flashcard.entity';
import { FlashcardService } from './flashcard.service';

@Resolver(() => Flashcard)
export class FlashcardResolver {
  constructor(private readonly flashcardService: FlashcardService) {}

  @Query((returns) => [Flashcard])
  async getFlashcards(@Args() flashcardArgs: FlashcardArgs) {
    return [
      {
        front: 'front',
        back: 'back',
      },
    ];
  }

  @Mutation((returns) => Flashcard)
  async createFlashcard(@Args() flashcardArgs: FlashcardArgs) {
    return this.flashcardService.createFlashcard(flashcardArgs);
  }
}
