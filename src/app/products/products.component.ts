import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'CCTV', cols: 1, rows: 1 },
          { title: 'Solar Panel', cols: 1, rows: 1 },
          { title: 'Lighting Systems', cols: 1, rows: 1 },
          { title: 'Interior Design Accessories', cols: 1, rows: 1 },
          { title: 'Computer Peripherals', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'CCTV', cols: 1, rows: 1 },
          { title: 'Solar Panel', cols: 1, rows: 1 },
          { title: 'Lighting Systems', cols: 1, rows: 2 },
          { title: 'Interior Design Accessories', cols: 1, rows: 1 },
          { title: 'Computer Peripherals', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  }
  
imageObject: Array<object> = [{
  image: 'assets/bird2.jpg',
  thumbImage: 'assets/bird2.jpg'
}, {
  image: 'assets/bird3.jpg',
  thumbImage: 'assets/bird3.jpg'
}, {
  image: 'assets/bird4.jpg',
  thumbImage: 'assets/bird4.jpg'
},
{
  image: 'assets/bird2.jpg',
  thumbImage: 'assets/bird2.jpg'
},
{
  image: 'assets/bird3.jpg',
  thumbImage: 'assets/bird3.jpg'
},
{
  image: 'assets/bird4.jpg',
  thumbImage: 'assets/bird4.jpg'
}
];
}
