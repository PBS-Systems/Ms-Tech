import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 20.8783;
  lng: number = 85.09515;

  constructor() { }

  ngOnInit() {
  }

}
