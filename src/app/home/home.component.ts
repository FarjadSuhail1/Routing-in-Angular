import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //injecting router
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLoadServers()
  {
    //complex calculations
    this.router.navigate(['/servers']);
  }
}
