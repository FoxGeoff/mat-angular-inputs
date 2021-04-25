import { Injectable } from '@angular/core';
import { asyncScheduler, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

export interface PeriodicElementModel {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Injectable()
export class DataService {

  public listElements2: PeriodicElementModel[] = [
    { position: 1, name: "Hydrogen2", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Helium2", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Lithium2", weight: 6.941, symbol: "Li" }
  ]

  public listElements3: PeriodicElementModel[] = [
    { position: 1, name: "Hydrogen3", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Helium3", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Lithium3", weight: 6.941, symbol: "Li" }
  ]

  constructor() { }

  // Observable<PeriodicElementModel>[]
  task2(): void {
    of([...this.listElements3])
      .subscribe(
        (res) => res,
        (err) => console.log(`error`, err)
      );
  }

  task(): PeriodicElementModel[] {
    return this.listElements3;
  }

  getElements(timedelay: number) {

    return asyncScheduler.schedule(this.task, timedelay)
  }
}


