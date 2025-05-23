import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PsuService } from '../psu.service';
import { Psu } from '../psu.interfaces';

@Component({
  selector: 'app-psu-dialog',
  templateUrl: './psu-dialog.component.html',
  styleUrls: ['./psu-dialog.component.css'],
  standalone: false
})
export class PsuDialogComponent {
  psuForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<PsuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Psu | null,
    private fb: FormBuilder,
    private psuService: PsuService
  ) {
    this.psuForm = this.fb.group({
      _id: [data?._id || null],
      name: [data?.name || '', Validators.required],
      wattage: [data?.wattage || null, [Validators.required, Validators.min(1)]],
      efficiencyRating: [data?.efficiencyRating || ''],
      modular: [data?.modular || false],
    });

    this.isEditMode = !!data?._id;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.psuForm.valid) {
      const formData = this.psuForm.value;

      if (this.isEditMode) {
        this.psuService.updatePsu(formData._id, formData).subscribe(() => {
          this.dialogRef.close('PSU updated successfully!');
        });
      } else {
        this.psuService.createPsu(formData).subscribe(() => {
          this.dialogRef.close('PSU created successfully!');
        });
      }
    }
  }
}