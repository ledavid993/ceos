import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  closeMongodbConnection,
  rootMongoTestModule,
} from '../../test-utils/mongo/MongoTestModule.util';
import { FlashcardRepository } from '../flashcard.repository';
import { FlashcardService } from '../flashcard.service';

describe('FlashcardService', () => {
  let service: FlashcardService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongoTestModule(),
        TypeOrmModule.forFeature([FlashcardRepository]),
      ],
      providers: [FlashcardService],
    }).compile();

    service = module.get<FlashcardService>(FlashcardService);
  });

  afterEach(async () => {});

  describe('Flashcard Module', () => {
    describe('createFlashcard', () => {
      it('should make a new flashcard and retrieve from the db', async () => {
        const flashcard = {
          front: 'What is the meaning of life?',
          back: '42',
        };
        const response = await service.createFlashcard(flashcard);
        const expected = await service.getOneFlashcard({ uid: response.uid });
        expect(response).toEqual(expected);
      });
    });
    describe('getReservation', () => {
      it('should get a flashcard', async () => {
        const flashcard = {
          front: 'What is the meaning of life?',
          back: '42',
        };
        const response = await service.createFlashcard(flashcard);
        const expected = await service.getOneFlashcard({ uid: response.uid });
        expect(response).toEqual(expected);
      });
    });
    describe('getReservations', () => {
      it('should get all flashcards', async () => {
        const response = await service.getFlashcards();
        expect(response).toBeDefined();
      });
      it('should get filtered flashcards', async () => {});
    });
    describe('updateReservation', () => {
      it('should update a flashcard', async () => {});
    });
  });

  afterAll(async () => {
    await closeMongodbConnection();
  });
});
