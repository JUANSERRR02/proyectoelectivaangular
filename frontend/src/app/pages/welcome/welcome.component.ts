import { Component, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  constructor(private welcomeService: WelcomeService) {}

  ngOnInit(): void {
    this.welcomeService.getData().subscribe(res => {
      console.log(res)
    })
  }

}
