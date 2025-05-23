import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CpusComponent } from './cpu/cpu.component';
import { GpuComponent } from './gpu/gpu.component';
import { MotherboardsComponent } from './motherboards/motherboards.component';
import { PsuComponent } from './psu/psu.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'cpu', component: CpusComponent },
  { path: 'gpu', component: GpuComponent },
  { path: 'motherboards', component: MotherboardsComponent },
  { path: 'psu', component: PsuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
