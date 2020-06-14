import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { CommonModule } from './common/common.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from 'path'
@Module({
  imports: [ContactsModule, CommonModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'contacts-app'),
      exclude: ['/api*']
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
