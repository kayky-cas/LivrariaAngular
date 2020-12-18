import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  livros$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.livros$ = this.firestore.collection('livros').valueChanges();

  }

  ngOnInit(): void {
  }

}
