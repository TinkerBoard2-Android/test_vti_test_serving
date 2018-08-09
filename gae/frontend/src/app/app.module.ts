/**
 * Copyright (C) 2018 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Angular modules.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// User components.
import { AppComponent } from './app.component';
import { BuildComponent } from './menu/build/build.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { DeviceComponent } from './menu/device/device.component';
import { JobComponent } from './menu/job/job.component';
import { LabComponent } from './menu/lab/lab.component';
import { ScheduleComponent } from './menu/schedule/schedule.component';

// User modules.
import { NavModule } from './shared/navbar/navbar';


const appRoutes: Routes = [
  { path: 'device', component: DeviceComponent },
  { path: 'build', component: BuildComponent },
  { path: 'job', component: JobComponent },
  { path: 'lab', component: LabComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    DashboardComponent,
    DeviceComponent,
    JobComponent,
    LabComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    NavModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }