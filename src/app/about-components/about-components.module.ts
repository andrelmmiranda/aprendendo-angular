import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponentsComponent } from './about-components.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OverviewComponent } from './overview/overview.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component'



@NgModule({
  declarations: [
    AboutComponentsComponent,
    OverviewComponent,
    ComponentLifecycleComponent,
    ComponentStylesComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports:[
    AboutComponentsComponent
  ]
})
export class AboutComponentsModule { }
