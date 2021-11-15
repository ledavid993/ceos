import { MongoMemoryServer } from 'mongodb-memory-server';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getManager } from 'typeorm';

let mongodb: MongoMemoryServer;

export const rootMongoTestModule = (options = {}) =>
  TypeOrmModule.forRootAsync({
    useFactory: async () => {
      mongodb = await MongoMemoryServer.create();
      const mongoUri = mongodb.getUri();
      return {
        type: 'mongodb',
        name: 'test',
        url: mongoUri,
        entities: [__dirname + '/../../../**/*.entity.ts'],
        ...options,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    },
  });

export const clearMongoDatabase = async () => {
  const manager = await getManager().getMongoRepository('test');
  manager.clear();
};

export const closeMongodbConnection = async () => {
  if (mongodb) await mongodb.stop();
};
