import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ContactsModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
