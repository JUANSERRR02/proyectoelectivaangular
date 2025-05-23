import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GpuService } from './gpu.service';
import { Gpu } from './gpu.interfaces';
import { GpuDialogComponent } from './gpu-dialog/gpu-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.css'],
  standalone: false,
})
export class GpuComponent implements OnInit {
  gpus: Gpu[] = [];
  displayedColumns: string[] = [
    'name',
    'manufacturer',
    'memory',
    'actions',
  ];

  constructor(
    private gpuService: GpuService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadGpus();
  }

  loadGpus(): void {
    this.gpuService.getAllGpus().subscribe((data) => {
      this.gpus = data;
    });
  }

  openDialog(gpu?: Gpu): void {
    const dialogRef = this.dialog.open(GpuDialogComponent, {
      width: '400px',
      data: gpu || null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadGpus();
      }
    });
  }

  deleteGpu(id: string): void {
    this.gpuService.deleteGpu(id).subscribe(() => {
      this.snackBar.open('GPU deleted successfully!', 'Close', {
        duration: 3000,
      });
      this.loadGpus();
    });
  }
}