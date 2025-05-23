import { Component, OnInit } from '@angular/core';
import { CpuService } from './cpu.service';
import { Cpu } from './cpus.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CpuDialogComponent } from './cpu-dialog/cpu-dialog.component';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css'],
  standalone: false,
})
export class CpusComponent implements OnInit {
  cpus: Cpu[] = [];
  displayedColumns: string[] = ['name', 'brand', 'cores', 'threads', 'clockSpeed', 'actions'];

  constructor(
    private cpuService: CpuService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadCpus();
  }

  loadCpus(): void {
    this.cpuService.getAllCpus().subscribe((data) => {
      this.cpus = data;
    });
  }

  openDialog(cpu?: Cpu): void {
    const dialogRef = this.dialog.open(CpuDialogComponent, {
      width: '400px',
      data: cpu ? { ...cpu } : null,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadCpus()
    });
  }

  deleteCpu(id: string): void {
    this.cpuService.deleteCpu(id).subscribe(() => {
      this.snackBar.open('CPU deleted successfully!', 'Close', { duration: 3000 });
      this.loadCpus();
    });
  }
}