import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetFlashcardArgs {
  @Field()
  backContains?: string;

  @Field()
  frontContains?: string;
}
