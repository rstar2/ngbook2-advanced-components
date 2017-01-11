import { Component } from '@angular/core';

import { EXAMPLES } from "./main/examples";
import { ExampleApp } from "./main/example-app";

@Component({
  selector: 'advanced-components-app',
  template: `
  <!-- Menu Bar -->
  <div class="ui menu">
    <div class="ui container">
      <a href="#" class="header item">
        <img class="logo" 
             src="${require('assets/images/logos/ng-book-2-minibook.png')}" />
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
  examples: ExampleApp[];

  constructor() {
    this.examples = EXAMPLES;
  }
}
