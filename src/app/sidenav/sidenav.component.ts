import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})

export class SidenavComponent implements OnInit {

  public appTitle = 'App Eyesnap';

  constructor() { }
  ngOnInit() {
  }

}
