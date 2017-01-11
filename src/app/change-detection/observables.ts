import {
  Component,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'observable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div>
    <div>Total items: {{counter}}</div>
    <div>Total items (from timer): {{counterFromTimer}}</div>
  </div>
  `
})
export class ObservableCmp implements OnInit {
  @Input() items: Observable<number>;
  counter = 0;
  counterFromTimer = 0;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    // this.items.subscribe((v) => {
    //   console.log('got value', v);
    //   this.counter++;
    //   if (this.counter % 5 == 0) {
    //     this.changeDetector.markForCheck();
    //   }
    // }, null, () => {
    //   this.changeDetector.markForCheck();
    // });

    // the same works with normal timeouts
    const interval = setInterval(()=> {
      this.counterFromTimer++;
      if (this.counterFromTimer % 5 == 0) {
         this.changeDetector.markForCheck();
      }

      if (this.counterFromTimer > 100) {
        clearInterval(interval);
      }
    }, 100)
  }
}

@Component({
  selector: 'change-detection-sample-app',
  template: `
  <observable [items]="itemObservable"></observable>
  `
})
export class ObservableChangeDetectionSampleApp {
  itemObservable: Observable<number>;

  constructor() {
    this.itemObservable = Observable.timer(100, 100).take(101);
  }
}


