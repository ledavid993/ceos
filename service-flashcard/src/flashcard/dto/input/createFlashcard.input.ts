import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class CreateFlashcardInput {
  @Field()
  @MaxLength(100)
  title: string;

  @Field()
  @MaxLength(5000)
  back: string;

  @Field()
  @MaxLength(5000)
  front: string;
}
