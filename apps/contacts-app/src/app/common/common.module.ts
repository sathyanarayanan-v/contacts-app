import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { FilterContactPipe } from './pipes/filter-contact.pipe';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CommonDialogComponent,
    HeaderComponent,
    ConfirmationDialogComponent,
    FilterContactPipe,
  ],
  imports: [CommonModule, MatDialogModule],
  exports: [
    HeaderComponent,
    CommonDialogComponent,
    ConfirmationDialogComponent,
    FilterContactPipe,
  ],
})
export class ContactsAppCommonModule {}
