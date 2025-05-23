import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox'

import { MotherboardsComponent } from './motherboards/motherboards.component';
import { MotherboardDialogComponent } from './motherboards/motherboard-dialog/motherboard-dialog.component';
import { CpuDialogComponent } from './cpu/cpu-dialog/cpu-dialog.component';
import { CpusComponent } from './cpu/cpu.component';
import { PsuComponent } from './psu/psu.component';
import { PsuDialogComponent } from './psu/psu-dialog/psu-dialog.component';
import { GpuComponent } from './gpu/gpu.component';
import { GpuDialogComponent } from './gpu/gpu-dialog/gpu-dialog.component';

@NgModule({
  declarations: [
    MotherboardsComponent,
    MotherboardDialogComponent,
    CpusComponent,
    CpuDialogComponent,
    PsuComponent,
    PsuDialogComponent,
    GpuComponent,
    GpuDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule
  ],
})
export class PagesModule {}