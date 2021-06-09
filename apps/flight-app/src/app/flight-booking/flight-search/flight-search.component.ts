/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Flight, FlightService } from '@flight-workspace/flight-lib';
import { LocalBasketService } from '../local-basket.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;
  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService, private localBasketService: LocalBasketService) {}

  get flights(): Flight[] {
    return this.flightService.flights;
  }

  ngOnInit(): void {}

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService.load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }

  saveBasket(): void {
    this.localBasketService.save(this.basket).then(
      _ => console.log('successfully saved basket"'),
      err => console.error('error saving basket', err)
    )
  }

  loadBasket(): void {
    this.localBasketService.load().then(
      basket => { this.basket = basket; },
      err => console.error('error loading basket', err)
    );
  }
}
