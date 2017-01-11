import { Routes } from "@angular/router";

import { EXAMPLES } from "../main/examples";
import { ExampleApp } from "../main/example-app";


export function mapRoutes(example: ExampleApp) {
  return {path: example.path, component: example.component, pathMatch: 'full'};
}

// dynamically configure the router based on our ExampleApps
export const APP_ROUTES: Routes = EXAMPLES.map(mapRoutes);
