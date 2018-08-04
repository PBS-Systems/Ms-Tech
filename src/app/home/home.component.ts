import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '', cols: 1, rows: 1 }
         // { title: 'Card 2', cols: 1, rows: 1 },
          //{ title: 'Card 3', cols: 1, rows: 2 },
          //{ title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: '', cols: 2, rows: 1 },
        //{ title: 'Card 2', cols: 1, rows: 1 },
       // { title: 'Card 3', cols: 1, rows: 2 },
       // { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  ); 

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  }
  
  
}

