import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Nicholas Gervais";
  bgUrl = "/assets/home-bg3.jpg";
  bgPos = "70% 50%";

  constructor() { }

  ngOnInit() {
  }

}
