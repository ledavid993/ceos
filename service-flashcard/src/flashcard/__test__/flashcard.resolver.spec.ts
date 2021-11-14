import { Test, TestingModule } from '@nestjs/testing';
import { FlashcardResolver } from './flashcard.resolver';

describe('FlashcardResolver', () => {
  let resolver: FlashcardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlashcardResolver],
    }).compile();

    resolver = module.get<FlashcardResolver>(FlashcardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
