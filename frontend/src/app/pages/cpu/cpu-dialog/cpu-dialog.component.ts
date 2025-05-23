import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpuService } from '../cpu.service'; // Import the service
import { Cpu } from '../cpus.interfaces';

@Component({
  selector: 'app-cpu-dialog',
  templateUrl: './cpu-dialog.component.html',
  styleUrls: ['./cpu-dialog.component.css'],
  standalone: false,
})
export class CpuDialogComponent {
  cpuForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CpuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cpu | null,
    private fb: FormBuilder,
    private cpuService: CpuService
  ) {

    this.cpuForm = this.fb.group({
      _id: [data?._id || null],
      name: [data?.name || '', Validators.required],
      brand: [data?.brand || '', Validators.required],
      cores: [data?.cores || null, [Validators.required, Validators.min(1)]],
      threads: [data?.threads || null, [Validators.required, Validators.min(1)]],
      clockSpeed: [data?.clockSpeed || null, [Validators.required, Validators.min(0.1)]],
      description: [data?.description || ''],
    });

    console.log(this.cpuForm)

    this.isEditMode = !!data?._id;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.cpuForm.valid) {
      const formData = this.cpuForm.value;

      if (this.isEditMode) {
        this.cpuService.updateCpu(formData._id, formData).subscribe(() => {
          this.dialogRef.close('CPU updated successfully!');
        });
      } else {
        this.cpuService.createCpu(formData).subscribe(() => {
          this.dialogRef.close('CPU created successfully!');
        });
      }
    }
  }
}