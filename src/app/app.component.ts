import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private readonly router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      // Executed after Router Event: NavigationStart
      if(event instanceof NavigationStart) {
        console.log("App Component Navigation Start");
      }
    })
  }

  // Executed after Router Event: ResolveEnd
  onActivate(event: unknown) {
    console.log("App Component: On Activate method");
  }

}
