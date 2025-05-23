import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MotherboardService } from '../motherboards.service'; // Import the service
import { Motherboard } from '../motherboards.interfaces';

@Component({
  selector: 'app-motherboard-dialog',
  templateUrl: './motherboard-dialog.component.html',
  styleUrls: ['./motherboard-dialog.component.css'],
  standalone: false,
})
export class MotherboardDialogComponent {
  motherboardForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<MotherboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Motherboard | null,
    private fb: FormBuilder,
    private motherboardService: MotherboardService
  ) {
    // Initialize the form with your exact structure
    this.motherboardForm = this.fb.group({
      _id: [data?._id || null],
      name: [data?.name || '', Validators.required],
      brand: [data?.brand || '', Validators.required],
      socketType: [data?.socketType || '', Validators.required],
      formFactor: [data?.formFactor || '', Validators.required],
    });

    // Determine if the dialog is in edit mode
    this.isEditMode = !!data?._id;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.motherboardForm.valid) {
      const formData = this.motherboardForm.value;

      if (this.isEditMode) {
        // Update existing motherboard
        this.motherboardService.updateMotherboard(formData._id, formData).subscribe(() => {
          this.dialogRef.close('Motherboard updated successfully!');
        });
      } else {
        // Create new motherboard
        this.motherboardService.createMotherboard(formData).subscribe(() => {
          this.dialogRef.close('Motherboard created successfully!');
        });
      }
    }
  }
}