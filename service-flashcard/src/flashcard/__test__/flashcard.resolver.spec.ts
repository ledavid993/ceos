import { Test, TestingModule } from '@nestjs/testing';
import { identity } from 'rxjs';
import { FlashcardResolver } from '../flashcard.resolver';
import { FlashcardService } from '../flashcard.service';

const mockFlashcardService = () => ({
  createFlashcard: jest.fn().mockImplementation((mockCreateFlashcardInput) => ({
    id: 1,
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
    ...mockCreateFlashcardInput,
  })),
  getFlashcards: jest.fn().mockImplementation((mockGetFlashcardArgs) => [
    {
      id: 1,
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01',
      front: 'What is the color of the sky?',
      back: 'Blue',
    },
    {
      id: 2,
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01',
      front: 'What is the biggest mammal that current exist?',
      back: 'Elephants',
    },
  ]),
  getFlashcard: jest.fn().mockImplementation((mockId) => ({
    id: 2,
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
    front: 'What is the biggest mammal that current exist?',
    back: 'Elephant',
  })),
  updateFlashcard: jest.fn().mockImplementation((mockCreateFlashcardInput) => ({
    id: 1,
    createdAt: '2020-01-01',
    updatedAt: '2020-01-02',
    ...mockCreateFlashcardInput,
  })),
});

describe('FlashcardResolver', () => {
  let resolver: FlashcardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FlashcardResolver,
        {
          provide: FlashcardService,
          useFactory: mockFlashcardService,
        },
      ],
    }).compile();

    resolver = module.get<FlashcardResolver>(FlashcardResolver);
  });

  describe('Flashcard Module', () => {
    describe('createFlashcard', () => {
      const mockCreateFlashcardInput: any = {
        front: 'What is the color of the sky?',
        back: 'Blue',
      };
      it('should make a new flashcard', () => {
        expect(resolver.createFlashcard(mockCreateFlashcardInput)).toEqual({
          id: 1,
          createdAt: '2020-01-01',
          updatedAt: '2020-01-01',
          ...mockCreateFlashcardInput,
        });
      });
    });
    describe('getReservation', () => {
      it('should get a flashcard', () => {
        expect(resolver.getFlashcard('2')).toEqual({
          id: 2,
          createdAt: '2020-01-01',
          updatedAt: '2020-01-01',
          front: 'What is the biggest mammal that current exist?',
          back: 'Elephant',
        });
      });
    });
    describe('getReservations', () => {
      it('should get all flashcards', () => {
        const mockGetFlashcardsArgs: any = {};
        expect(resolver.getFlashcards(mockGetFlashcardsArgs)).toEqual([
          {
            id: 1,
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01',
            front: 'What is the color of the sky?',
            back: 'Blue',
          },
          {
            id: 2,
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01',
            front: 'What is the biggest mammal that current exist?',
            back: 'Elephants',
          },
        ]);
      });
      it('should get filtered flashcards', async () => {
        const mockGetFlashcardsArgs: any = {
          backContains: 'big',
        };

        const response = await resolver.getFlashcards(mockGetFlashcardsArgs);
        const result = response.filter((flashcard) =>
          flashcard.back.includes('Blue'),
        );

        expect(result).toEqual([
          {
            id: 1,
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01',
            front: 'What is the color of the sky?',
            back: 'Blue',
          },
        ]);
      });
    });
    describe('updateReservation', () => {
      it('should update a flashcard', async () => {
        const mockCreateFlashcardInput: any = {
          front: 'What is the biggest mammal that current exist?',
          back: 'Elephant',
        };

        const response = await resolver.createFlashcard(
          mockCreateFlashcardInput,
        );

        for (const key in mockCreateFlashcardInput) {
          response[key] = mockCreateFlashcardInput[key];
        }

        response['updatedAt'] = '2020-01-02';

        expect(resolver.updateFlashcard(mockCreateFlashcardInput)).toEqual(
          response,
        );
      });
    });
  });
});
