import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showSnackbar(
    msg: string,
    button_text: string,
    duration: number,
    panelClass: string
  ) {
    this.snackBar.open(msg, button_text, {
      duration,
      panelClass
    });
  }
}
