import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PsuService } from './psu.service';
import { Psu } from './psu.interfaces';
import { PsuDialogComponent } from './psu-dialog/psu-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-psu',
  templateUrl: './psu.component.html',
  styleUrls: ['./psu.component.css'],
  standalone: false,
})
export class PsuComponent implements OnInit {
  psus: Psu[] = [];
  displayedColumns: string[] = [
    'name',
    'wattage',
    'efficiencyRating',
    'modular',
    'actions',
  ];

  constructor(
    private psuService: PsuService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadPsus();
  }

  loadPsus(): void {
    this.psuService.getAllPsus().subscribe((data) => {
      this.psus = data;
    });
  }

  openDialog(psu?: Psu): void {
    const dialogRef = this.dialog.open(PsuDialogComponent, {
      width: '400px',
      data: psu || null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadPsus();
      }
    });
  }

  deletePsu(id: string): void {
    this.psuService.deletePsu(id).subscribe(() => {
      this.snackBar.open('Psu deleted successfully!', 'Close', {
        duration: 3000,
      });
      this.loadPsus();
    });
  }
}
