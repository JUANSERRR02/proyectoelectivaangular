// src/gpu/gpu-dialog/gpu-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GpuService } from '../gpu.service';
import { Gpu } from '../gpu.interfaces';

@Component({
  selector: 'app-gpu-dialog',
  templateUrl: './gpu-dialog.component.html',
  styleUrls: ['./gpu-dialog.component.css'],
  standalone: false,
})
export class GpuDialogComponent {
  gpuForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<GpuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Gpu | null,
    private fb: FormBuilder,
    private gpuService: GpuService
  ) {
    this.gpuForm = this.fb.group({
      _id: [data?._id || null],
      name: [data?.name || '', Validators.required],
      manufacturer: [data?.manufacturer || '', Validators.required],
      memory: [data?.memory || null, [Validators.required, Validators.min(1)]],
    });

    this.isEditMode = !!data?._id;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.gpuForm.valid) {
      const formData = this.gpuForm.value;

      if (this.isEditMode) {
        this.gpuService.updateGpu(formData._id, formData).subscribe(() => {
          this.dialogRef.close('GPU updated successfully!');
        });
      } else {
        this.gpuService.createGpu(formData).subscribe(() => {
          this.dialogRef.close('GPU created successfully!');
        });
      }
    }
  }
}