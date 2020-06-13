import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { CommonModule } from '../common/common.module';
import { ContactRepository } from './contacts.repository';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService,ContactRepository],
  imports:[CommonModule]
})
export class ContactsModule {}
