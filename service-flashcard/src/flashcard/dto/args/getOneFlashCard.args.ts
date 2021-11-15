import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetOneFlashcardArgs {
  @Field()
  uid: string;
}
