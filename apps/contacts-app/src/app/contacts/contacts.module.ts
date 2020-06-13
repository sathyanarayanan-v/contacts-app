import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './+state/effects/contacts.effects';
import { contactReducer } from './+state/reducer/contacts.reducer';
import { StoreModule } from '@ngrx/store';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { ContactsAppCommonModule } from '../common/common.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ViewContactsComponent, DeleteContactComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ContactsEffects]),
    StoreModule.forFeature('contactState', contactReducer),
    ContactsAppCommonModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class ContactsModule { }
