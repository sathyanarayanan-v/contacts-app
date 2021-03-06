import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './+state/effects/contacts.effects';
import { contactReducer } from './+state/reducer/contacts.reducer';
import { StoreModule } from '@ngrx/store';
import { ListContactsComponent } from './pages/list-contacts/list-contacts.component';
import { ContactsAppCommonModule } from '../common/common.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewContactComponent } from './pages/view-contact/view-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareContactComponent } from './pages/share-contact/share-contact.component';
import { QRCodeModule } from 'angularx-qrcode';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [ListContactsComponent, DeleteContactComponent, ViewContactComponent, ShareContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ContactsEffects]),
    StoreModule.forFeature('contactState', contactReducer),
    ContactsAppCommonModule,
    MatSnackBarModule,
    MatDialogModule,
    QRCodeModule,
    MatTooltipModule
  ]
})
export class ContactsModule { }
