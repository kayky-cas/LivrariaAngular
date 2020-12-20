import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  route: string;

  constructor(private router: Router) {
    this.route = router.url

  }

  ngOnInit(): void {
  }


}
