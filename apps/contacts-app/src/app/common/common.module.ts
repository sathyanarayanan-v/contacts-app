import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    CommonDialogComponent,
    HeaderComponent,
    ConfirmationDialogComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    CommonDialogComponent,
    ConfirmationDialogComponent,
  ],
})
export class ContactsAppCommonModule {}
