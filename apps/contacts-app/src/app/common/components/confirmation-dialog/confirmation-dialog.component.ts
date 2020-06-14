import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '@contacts-app/shared'

@Component({
  selector: 'contacts-app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  @Input() title: string;
  @Input() confirm: string;
  @Input() cancel: string;
  @Output() buttonClicked: EventEmitter<string>;

  onDialogYes: boolean;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    public snackbar: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.buttonClicked = new EventEmitter();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick() {
    this.buttonClicked.emit();
  }
}
