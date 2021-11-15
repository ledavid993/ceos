import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Flashcard {
  @ObjectIdColumn()
  _id: string;

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  uid: string;

  @Column()
  @Field()
  front: string;

  @Column()
  @Field()
  back: string;

  @Column({
    type: 'date',
  })
  @Field()
  createdAt: string;

  @Column({
    type: 'date',
  })
  @Field()
  updatedAt: string;
}
