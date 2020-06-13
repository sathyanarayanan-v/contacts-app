import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [CommonDialogComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,CommonDialogComponent]
})
export class ContactsAppCommonModule { }
