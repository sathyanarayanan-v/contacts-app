import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './+state/effects/contacts.effects';
import { contactReducer } from './+state/reducer/contacts.reducer';
import { StoreModule } from '@ngrx/store';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';



@NgModule({
  declarations: [ViewContactsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ContactsEffects]),
    StoreModule.forFeature('contatState', contactReducer)

  ]
})
export class ContactsModule { }
