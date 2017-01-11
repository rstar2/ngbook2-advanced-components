import { Component } from '@angular/core';

import { ExampleDef, EXAMPLES } from "./main/example";

@Component({
  selector: 'advanced-components-app',
  template: `
  <!-- Menu Bar -->
  <div class="ui menu">
    <div class="ui container">
      <a href="#" class="header item">
        <img class="logo" 
             src="" />
        ng-book 2
      </a>
      <div class="header item borderless">
        <h1 class="ui header">
          Angular 2 Advanced Components
        </h1>
      </div>
    </div>
  </div>

  <div class="ui grid container">
    <div class="four wide column">
      <sidebar [items]="examples"></sidebar>
    </div>

    <div class="ui main text container eight wide column">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AdvancedComponentsApp {
  examples: ExampleDef[];

  constructor() {
    this.examples = EXAMPLES;
  }
}
