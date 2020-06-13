import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './+state/effects/contacts.effects';
import { contactReducer } from './+state/reducer/contacts.reducer';
import { StoreModule } from '@ngrx/store';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { ContactsAppCommonModule } from '../common/common.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [ViewContactsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ContactsEffects]),
    StoreModule.forFeature('contatState', contactReducer),
    ContactsAppCommonModule,
    MatSnackBarModule
  ]
})
export class ContactsModule { }
