import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'contacts-app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.scss'],
})
export class CommonDialogComponent implements OnInit {
  onDialogYes: boolean;
  @Input() title: string;
  @Input() confirm: string;
  @Input() cancel: string;
  @Output() buttonClicked = new EventEmitter<string>();
  constructor(private dialogRef: MatDialogRef<CommonDialogComponent>) {}

  ngOnInit(): void {}
  onClick() {
    this.buttonClicked.emit();
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
