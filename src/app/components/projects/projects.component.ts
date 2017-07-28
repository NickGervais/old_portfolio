import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  title = "Projects";
  bgUrl = "/assets/projects-bg.jpeg";
  bgPos = "30% 50%";
  constructor() { }

  ngOnInit() {
  }

}
