import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetFlashcardsArgs {
  @Field({ nullable: true })
  backContains?: string;

  @Field({ nullable: true })
  frontContains?: string;
}
