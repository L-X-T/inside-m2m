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

    if (typeof window === 'object') {
      window.addEventListener('beforeinstallprompt', (e: any) => {
        console.log('beforeinstallprompt')

        this.snackBar.open('Install on Desktop?', 'OK')
          .onAction().subscribe(_ => {
          e.prompt();
        });

        e.userChoice.then(choice => console.log('user choice', choice));
      });
    }
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
