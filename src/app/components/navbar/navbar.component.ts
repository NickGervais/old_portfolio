import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleOpen(){
    // document.querySelector('#nav-icon').classList.toggle('open');
    // document.querySelector('#right-nav').classList.toggle('open');
    document.getElementById('nav-icon').classList.toggle('open');
    document.getElementById('right-nav').classList.toggle('open');
  }
}
