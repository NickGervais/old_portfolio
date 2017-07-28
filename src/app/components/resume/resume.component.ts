import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  title = "Resume";
  bgUrl = "/assets/resume-bg.jpeg";
  bgPos = "50% 50%";

  constructor() { }

  ngOnInit() {
  }

}
