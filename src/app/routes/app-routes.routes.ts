import { Routes } from "@angular/router";

import { ExampleDef, EXAMPLES } from "../main/example";


export function mapRoutes(example: ExampleDef) {
  return {path: example.path, component: example.component, pathMatch: 'full'};
}

// dynamically configure the router based on our ExampleDefs
export const APP_ROUTES: Routes = EXAMPLES.map(mapRoutes);
