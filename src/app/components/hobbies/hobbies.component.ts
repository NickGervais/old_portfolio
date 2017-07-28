import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  title = "Hobbies";
  bgUrl = "/assets/hobby-bg.jpg";
  bgPos = "35% 50%";

  constructor() { }

  ngOnInit() {
  }

}
