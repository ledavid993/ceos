import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlashcardResolver } from './flashcard.resolver';
import { FlashcardService } from './flashcard.service';
import { FlashcardRepository } from 'src/flashcard/flashcard.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FlashcardRepository])],
  providers: [FlashcardResolver, FlashcardService],
})
export class FlashcardModule {}
