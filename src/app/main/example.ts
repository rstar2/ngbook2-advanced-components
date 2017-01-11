import { StyleSampleApp } from "../styling/styling";
import { HostSampleApp1 } from "../host/steps/host_01";
import { HostSampleApp2 } from "../host/steps/host_02";
import { HostSampleApp3 } from "../host/steps/host_03";
import { HostSampleApp4 } from "../host/steps/host_04";
import { HostSampleApp } from "../host/host";
import { TabsSampleApp } from "../tabs/tabs";
import { LifecycleSampleApp1 } from "../lifecycle-hooks/lifecycle_01";
import { LifecycleSampleApp2 } from "../lifecycle-hooks/lifecycle_02";
import { LifecycleSampleApp4 } from "../lifecycle-hooks/lifecycle_04";
import { LifecycleSampleApp3 } from "../lifecycle-hooks/lifecycle_03";
import { ForTemplateSampleApp } from "../templates/for";
import { IfTemplateSampleApp } from "../templates/if";
import { IntroComponent } from "./intro_component";
import { TransclusionSampleApp } from "../transclusion/transclusion";
import { OnPushChangeDetectionSampleApp } from "../change-detection/onpush";
import { ObservableChangeDetectionSampleApp } from "../change-detection/observables";

/*
 * We've got a ton of examples in this project. This interface defines the
 * structure of a single example.
 */
export interface ExampleDef {
  label: string;  // link label
  name: string;   // route name of the example
  path: string;   // route path
  component: any; // component class
  dev?: boolean;  // is it an intermediate step?
}

/*
 * Here's the master list of our examples for this chapter.
 */
export const EXAMPLES: ExampleDef[] = [
  {label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'Styling', name: 'Styling', path: 'styling', component: StyleSampleApp},
  {label: 'Modifying the Host (Step 1)', name: 'Host1', path: 'host-step-1', component: HostSampleApp1, dev: true},
  {label: 'Modifying the Host (Step 2)', name: 'Host2', path: 'host-step-2', component: HostSampleApp2, dev: true},
  {label: 'Modifying the Host (Step 3)', name: 'Host3', path: 'host-step-3', component: HostSampleApp3, dev: true},
  {label: 'Modifying the Host (Step 4)', name: 'Host4', path: 'host-step-4', component: HostSampleApp4, dev: true},
  {label: 'Modifying the Host', name: 'Host', path: 'host-final', component: HostSampleApp},
  {label: 'Tabs - Component Querying', name: 'Tabs', path: 'tabs', component: TabsSampleApp},
  {
    label: 'Lifecycle 1 - OnInit / OnDestroy',
    name: 'Lifecycle1',
    path: 'lifecycle-hooks-1',
    component: LifecycleSampleApp1
  },
  {label: 'Lifecycle 2 - OnChanges', name: 'Lifecycle2', path: 'lifecycle-hooks-2', component: LifecycleSampleApp2},
  {label: 'Lifecycle 3 - Differs', name: 'Lifecycle3', path: 'lifecycle-hooks-3', component: LifecycleSampleApp3},
  {label: 'Lifecycle 4 - Full', name: 'Lifecycle4', path: 'lifecycle-hooks-4', component: LifecycleSampleApp4},
  {label: 'ngBookFor', name: 'NgBookFor', path: 'ng-book-for', component: ForTemplateSampleApp},
  {label: 'ngBookIf', name: 'NgBookIf', path: 'ng-book-if', component: IfTemplateSampleApp},
  {label: 'Transclusion', name: 'Transclusion', path: 'transclusion', component: TransclusionSampleApp},
  {
    label: 'Change Detection - OnPush',
    name: 'ChangeDetectionOnPush',
    path: 'change-detection-onpush',
    component: OnPushChangeDetectionSampleApp
  },
  {
    label: 'Change Detection - Observables',
    name: 'ChangeDetectionObservables',
    path: 'change-detection-observ',
    component: ObservableChangeDetectionSampleApp
  },
];

