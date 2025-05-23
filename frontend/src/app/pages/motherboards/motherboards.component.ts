import { Component, OnInit } from '@angular/core';
import { MotherboardService } from './motherboards.service';
import { Motherboard } from './motherboards.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MotherboardDialogComponent } from './motherboard-dialog/motherboard-dialog.component';

@Component({
  selector: 'app-motherboards',
  templateUrl: './motherboards.component.html',
  styleUrls: ['./motherboards.component.css'],
  standalone: false
})
export class MotherboardsComponent implements OnInit {
  motherboards: Motherboard[] = [];
  displayedColumns: string[] = ['name', 'brand', 'socketType', 'formFactor', 'actions'];

  constructor(
    private motherboardService: MotherboardService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadMotherboards();
  }

  loadMotherboards(): void {
    this.motherboardService.getAllMotherboards().subscribe((data) => {
      this.motherboards = data;
    });
  }

  openDialog(motherboard?: Motherboard): void {
    const dialogRef = this.dialog.open(MotherboardDialogComponent, {
      width: '400px',
      data: motherboard ? { ...motherboard } : null,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadMotherboards()
    });
  }

  deleteMotherboard(id: string): void {
    this.motherboardService.deleteMotherboard(id).subscribe(() => {
      this.snackBar.open('Motherboard deleted successfully!', 'Close', { duration: 3000 });
      this.loadMotherboards();
    });
  }
}