import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private snackBar: MatSnackBar,
    private swUpdate: SwUpdate,
  ) {
    this.setupUpdates();
  }

  setupUpdates(): void {
    this.swUpdate.available.subscribe(u => {
      this.swUpdate.activateUpdate().then(e => {
        this.snackBar.open('App updated -- please reload!', 'OK');
      });
    });

    this.swUpdate.checkForUpdate();
  }
}
