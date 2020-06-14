/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv'
import { AppModule } from './app/app.module';
import * as mongoose from 'mongoose'
export const mongooseConnection = mongoose.connect(process.env.DB_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
},(error) => {
  if(error){
    console.log(`Error connecting to database because of ${error}`)
  }else{
    console.log('Successfully connected to database.')
  }
});
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port,'0.0.0.0', () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}
dotenv.config()
bootstrap();
